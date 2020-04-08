import { expect } from 'chai'
import { UniformDistribution, SlowSumDistribution, compare, FreeformDistribution, SumDistribution, ScalarMultipleDistribution } from '@/core/probability'

describe('Distributions can be compared', () => {
  it('to detect same distributions', () => {
    const d1 = new UniformDistribution(6);
    const d2 = new UniformDistribution(6);
    
    // should actually realistically be exactly 0,
    // but never trust a float point number..
    expect(compare(d1, d2)).to.be.closeTo(0, 0.0001);
  });
  it('to detect different distributions', () => {
    const d1 = new UniformDistribution(2);
    const d2 = new UniformDistribution(6);
    
    expect(compare(d1, d2)).not.to.be.closeTo(0, 0.0001);
  })
})


const sumDistImpls = [SlowSumDistribution, SumDistribution]
for (const implConstructor of sumDistImpls) {
  describe(implConstructor.name, () => {
    it('sums uniforms', () => {
      const dice = [new UniformDistribution(6), new UniformDistribution(6)];
  
      const result = new implConstructor(dice);
  
      const expected = new FreeformDistribution(new Map([
        [2,  1/36],
        [3,  2/36],
        [4,  3/36],
        [5,  4/36],
        [6,  5/36],
        [7,  6/36],
        [8,  5/36],
        [9,  4/36],
        [10, 3/36],
        [11, 2/36],
        [12, 1/36],
      ]));
      expect(compare(result, expected)).to.be.closeTo(0, 0.0001)
    });
  
    it('sums non-identical uniforms', () => {
      const dice = [new UniformDistribution(6), new UniformDistribution(2)];
  
      const result = new implConstructor(dice);
  
      const expected = new FreeformDistribution(new Map([
        [2,  1/12],
        [3,  2/12],
        [4,  2/12],
        [5,  2/12],
        [6,  2/12],
        [7,  2/12],
        [8,  1/12],
      ]));
      expect(compare(result, expected)).to.be.closeTo(0, 0.0001)
    });
  
    it('sums multiple non-identical uniforms', () => {
      const dice = [new UniformDistribution(6), new UniformDistribution(2), new UniformDistribution(4)];
  
      const result = new implConstructor(dice);
    
      const expected = new FreeformDistribution(new Map([
        [3,  1/48],
        [4,  3/48],
        [5,  5/48],
        [6,  7/48],
        [7,  8/48],
        [8,  8/48],
        [9,  7/48],
        [10,  5/48],
        [11,  3/48],
        [12,  1/48],
      ]));

      expect(compare(result, expected)).to.be.closeTo(0, 0.0001)
    });
  })
  
}

describe("SumOfIdenticalsDistribution", () => {
  for (let i = 1; i <= 20; i++) {
    it(`sums ${i}d6 equally to SumDistribution`, () => {   
      const result = new ScalarMultipleDistribution(new UniformDistribution(6), i);
  
      const expected = new SumDistribution(Array(i).fill(new UniformDistribution(6)));
      expect(compare(result, expected)).to.be.closeTo(0, 0.0001)
    })
  }

});