import { ProbabilityDemarcation, DiscreteProbabilityDistribution, UniformDistribution, SumOfUniformsDistribution } from './probability'

class RolledDice {
    dice: number[] = []
    expectedDist: DiscreteProbabilityDistribution

    constructor(dice: number[]) {
        const numDice = dice.length;
        this.dice = dice;
        
        const dice2 = [];
        for (let i = 0; i < numDice; i++) {
            dice2.push(new UniformDistribution(6));
        }
        this.expectedDist = new SumOfUniformsDistribution(numDice, 6);
    }

    get probs(): ProbabilityDemarcation {
        return this.expectedDist.probsFor(this.sum());
    }

    sum() {
        return this.dice.reduce((a, b) => a + b, 0);
    }
}

export function analyze(results: number[]) {
    return new RolledDice(results).probs;
}