
import { cartesianProduct, sum } from './arrays'

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
 * Combinatorial explosion alert! Seems to be performant enough for up to about 6d6
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
    }

    probsFor(result: Result): ProbabilityDemarcation {
        let lower = 0;
        let same = 0;
        let higher = 0;

        this.probs.forEach((v, k) => {
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
}