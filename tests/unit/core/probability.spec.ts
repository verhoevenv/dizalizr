import { expect } from 'chai'
import { UniformDistribution, SumDistribution } from '@/core/probability'

describe('SumDistribution', () => {
  it('calculates correctly', () => {
    const dice = [new UniformDistribution(6), new UniformDistribution(6)];
    
    const result = new SumDistribution(dice);

    expect(result.probsFor(2).same).to.be.closeTo(1/36, 0.0001)
  })
})
