import { ProbabilityDemarcation, DiscreteProbabilityDistribution, UniformDistribution, ScalarMultipleDistribution } from './probability'
import { sum } from './arrays';

export class RolledDice {
    public expectedDist: DiscreteProbabilityDistribution
    public probs: ProbabilityDemarcation
    public sum: number

    constructor(
        public dice: number[]
    ) {
        const numDice = dice.length;
        this.dice = dice;

        this.expectedDist = new ScalarMultipleDistribution(new UniformDistribution(6), numDice);

        this.sum = sum(this.dice);
        this.probs = this.expectedDist.probsFor(this.sum);
    }
}
