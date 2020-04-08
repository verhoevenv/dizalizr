import { ProbabilityDemarcation, DiscreteProbabilityDistribution, UniformDistribution, ScalarMultipleDistribution } from './probability'
import { sum } from './arrays';

export class RolledDice {
    public expectedDist: DiscreteProbabilityDistribution
    public probs: ProbabilityDemarcation

    constructor(
        public dice: number[]
    ) {
        const numDice = dice.length;
        this.dice = dice;

        this.expectedDist = new ScalarMultipleDistribution(new UniformDistribution(6), numDice);

        this.probs = this.expectedDist.probsFor(sum(this.dice));
    }
}
