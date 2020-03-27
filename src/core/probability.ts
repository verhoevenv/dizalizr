
import { cartesianProduct, sum } from './arrays'
import { choose } from './math';
import { normalize } from './maps';

export type Result = number
export type Universe = Set<Result>

export interface ProbabilityDemarcation {
    lower: number;
    same: number;
    higher: number;
}

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
        console.warn(`sum of probabilities should be about 1 but was ${sum(p.probs.values())}`)
    }
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
 * Combinatorial explosion alert!
 *   Seems to be performant enough for up to about 6d6, which is 6 ** 6 = 46656 combinations
 */
export class SumDistribution implements DiscreteProbabilityDistribution {

    bases: DiscreteProbabilityDistribution[]
    probs: Map<Result, number>;

    constructor(bases: DiscreteProbabilityDistribution[]) {
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
 * Faster, mostly exact distribution for sum of the same uniform distribution
 * 
 * This somehow breaks down from 15 dice onwards, yielding negative probabilities,
 * probably because of rounding errors.
 * 
 * TODO: Check error if we move to normal distribution for 10+ dice?
 * Or maybe a SumDistribution of sumofuniforms could be more stable?
 * TODO: should probably add some tests to sanity-check this to exact results
 */
export class SumOfUniformsDistribution implements DiscreteProbabilityDistribution {

    probs: Map<Result, number>;

    constructor(
        public numDice: number,
        public facesPerDie: number
    ) {
        this.probs = new Map();

        const counts: Map<Result, number> = new Map();
        //per https://math.stackexchange.com/questions/2304799/probabilies-of-rolling-n-dice-to-add-up-to-a-specific-sum/2304873#2304873
        for (let resultSum = numDice; resultSum <= numDice * facesPerDie; resultSum++) {
            const k = Math.floor((resultSum - numDice) / facesPerDie);
            
            let s = 0;
            for (let i = 0; i <= k; i++) {
                s += ((-1) ** i) * choose(numDice, i) * choose(resultSum - 1 - i*facesPerDie, numDice - 1);
            }
            counts.set(resultSum, s);
        }
        
        this.probs = normalize(counts);
        sanityCheck(this);
    }

    probsFor = (result: Result) => demarcationFromProbs(this.probs, result);
}
