import { sum } from './arrays';

/**
 * Returns new map with sum of values equal to 1
 */
export function normalize<T>(m: Map<T, number>) {
    const totalSum = sum(m.values());

    const result = new Map<T, number>();
    for (const [k, v] of m.entries()) {
        result.set(k, v/totalSum);
    }
    return result;
}