import { ProbabilityDemarcation, DiscreteProbabilityDistribution, UniformDistribution, SumDistribution } from './probability'
import { sum } from './arrays';

export class RolledDice {
    public expectedDist: DiscreteProbabilityDistribution
    public probs: ProbabilityDemarcation

    constructor(
        public dice: number[]
    ) {
        const numDice = dice.length;
        this.dice = dice;
        
        const dice2 = [];
        for (let i = 0; i < numDice; i++) {
            dice2.push(new UniformDistribution(6));
        }
        this.expectedDist = new SumDistribution(dice2);

        this.probs = this.expectedDist.probsFor(sum(this.dice));
    }
}
