import { expect } from 'chai'
import {cartesianProduct, sum} from '@/core/arrays'

describe('Cartesian product', () => {
  it('calculates correctly', () => {
    const arrs = [[1 , 2], [3, 4], [5, 6, 7]];
    
    const result = cartesianProduct(arrs);

    expect(result).to.eql([
        [1, 3, 5], [1, 3, 6], [1, 3, 7],
        [1, 4, 5], [1, 4, 6], [1, 4, 7],
        [2, 3, 5], [2, 3, 6], [2, 3, 7],
        [2, 4, 5], [2, 4, 6], [2, 4, 7],
    ])
  })
})

describe('Sum', () => {
  it('calculates correctly', () => {
    const arrs = [1, 2, 5, -4];
    
    const result = sum(arrs);

    expect(result).to.eql(4)
  })
})
