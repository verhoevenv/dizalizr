
import { cartesianProduct, sum } from './arrays';

import wu from 'wu';

export type Result = number
export type Universe = Set<Result>

export interface ProbabilityDemarcation {
    lower: number;
    same: number;
    higher: number;
}

//TODO: add universe-properties (aka probs.keys(), as iterator, or min/max) to optimize sum/union methods
//TODO: add symmetry-properties to possibly halve some calculations
export interface DiscreteProbabilityDistribution {
    probs: Map<Result, number>; // subject to sum(probs.values()) == 1
    probsFor(result: Result): ProbabilityDemarcation;
}

/**
 * Default implementation if no optimalization for probsFor is possible
 */
function demarcationFromProbs(probs: Map<Result, number>, result: Result): ProbabilityDemarcation {
    let lower = 0;
    let same = 0;
    let higher = 0;

    probs.forEach((v, k) => {
        if(k < result) {
            lower += v;
        } else if (k === result) {
            same += v;
        } else {
            higher += v;
        }
    })

    return {lower, same, higher}
}

function sanityCheck(p: DiscreteProbabilityDistribution) {
    for (const [k, v] of p.probs.entries()) {
        if (v < 0) {
            console.warn(`negative probability found: ${k} => ${v}`)
        }
    }

    if (Math.abs(sum(p.probs.values()) - 1) > 1e-10 ) {
        console.warn(`sum of probabilities should be about 1 but was ${sum(p.probs.values())}`, p)
    }
}

/**
 * Wraps a raw (number -> prob) map
 */
export class FreeformDistribution implements DiscreteProbabilityDistribution {
    constructor(
        public probs: Map<Result, number>
    ) {
        sanityCheck(this);
    }

    probsFor = (result: Result) => demarcationFromProbs(this.probs, result);
}

function unionUniverse(...ds: DiscreteProbabilityDistribution[]) {
    const allKeys = new Set<number>();
    for (const d of ds) {
        for (const k of d.probs.keys()) {
            allKeys.add(k);
        }    
    }
    return allKeys;
}

function sumUniverse(...ds: DiscreteProbabilityDistribution[]) {
    //assumption: all universes range from 1 to n, with at most negligable gaps
    // this allows us to just range from (1 * ds.length) .. (sum(n))
    const min = ds.length;
    const max = sum(ds.map(x => wu(x.probs.keys()).reduce((a, b) => (a > b) ? a : b)));
    return [...Array(1+max-min).keys()].map(v => min+v);
}

export function compare(d1: DiscreteProbabilityDistribution, d2: DiscreteProbabilityDistribution) {
    const allKeys = unionUniverse(d1, d2);

    let absError = 0;
    for (const k of allKeys) {
        const p1 = d1.probs.get(k) || 0;
        const p2 = d2.probs.get(k) || 0;
        absError += Math.abs(p1 - p2);
    }

    return absError;
}

function convolve(d1: DiscreteProbabilityDistribution, d2: DiscreteProbabilityDistribution): DiscreteProbabilityDistribution {
    //per https://en.wikipedia.org/wiki/Convolution_of_probability_distributions
    const keysOfDs = unionUniverse(d1, d2);
    const keysOfSum = sumUniverse(d1, d2);
    const probs = new Map();
    
    for(const z of keysOfSum) {
        let s = 0;
        for(const k of keysOfDs) {
            s += (d1.probs.get(k) || 0) * (d2.probs.get(z - k) || 0);
        }
        probs.set(z, s);
    }

    return new FreeformDistribution(probs);
}

/**
 * Models a fair n-sided die, or a coin for n=2.
 */
export class UniformDistribution implements DiscreteProbabilityDistribution {
    
    probs: Map<Result, number>;
    n: number

    constructor(n: number) {
        this.n = n;
        this.probs = new Map()
        for (let i = 1; i <= n; i++) {
            this.probs.set(i, 1/n);
        }
        sanityCheck(this);
    }

    probsFor(result: Result) {
        return {
            lower: (result - 1)/this.n,
            same: 1/this.n,
            higher: (this.n - result)/this.n
        }
    }

}

/**
 * Naive but universal and exact implementation.
 * Probably only useful for sanity checking other results.
 * Combinatorial explosion alert!
 *   Seems to be performant enough for up to about 6d6, which is 6 ** 6 = 46656 combinations
 */
export class SlowSumDistribution implements DiscreteProbabilityDistribution {

    probs: Map<Result, number>;

    constructor(
        public bases: DiscreteProbabilityDistribution[]
    ) {
        this.bases = bases;
        this.probs = new Map()

        const universePerBase = this.bases.map(b => Array.from(b.probs.keys()));
        for (const combination of cartesianProduct(universePerBase)) {
            const resultSum = sum(combination)
            let resultProb = 1;
            for (let i = 0; i < bases.length; i++) {
                resultProb = resultProb * bases[i].probsFor(combination[i]).same;
            }

            const previousProb = this.probs.get(resultSum) || 0;            
            this.probs.set(resultSum, previousProb + resultProb)
        }
        sanityCheck(this);
    }

    probsFor = (result: Result) => demarcationFromProbs(this.probs, result);
}

/**
 * Somewhat less naive implementation.
 * Goes up to 40d6 in ~100 ms, which seems acceptable for now.
 */
export class SumDistribution implements DiscreteProbabilityDistribution {

    probs: Map<Result, number>;

    constructor(
        public bases: DiscreteProbabilityDistribution[]
    ) {
        this.bases = bases;

        const [b1, ...basesRest] = bases;
        let resultDistribution = b1;
        for (const d of basesRest) {
            resultDistribution = convolve(resultDistribution, d);
        }
        this.probs = resultDistribution.probs;

        sanityCheck(this);
    }

    probsFor = (result: Result) => demarcationFromProbs(this.probs, result);
}
