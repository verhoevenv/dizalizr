import { expect } from 'chai'
import { choose } from '@/core/math'

describe('Binomial coefficient', () => {
  it('calculates correctly', () => {
    expect(choose(4, 2)).to.eq(6);
    expect(choose(13, 5)).to.eq(1287);

    expect(choose(1234, 0)).to.eq(1);
    expect(choose(2000, 1999)).to.eq(2000);
  })
});
