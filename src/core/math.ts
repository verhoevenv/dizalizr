//candidate for memoization, check usage patterns
export function choose(n: number, k: number): number {
    //from Wikipedia: https://en.wikipedia.org/wiki/Binomial_coefficient
    if(k < 0 || k > n)
        return 0;
    if(k == 0 || k == n)
        return 1;
    k = Math.min(k, n - k);
    let c = 1;
    for (let i = 0; i < k; i++) {
        c = c * (n - i) / (i + 1);
    }
    return c;
}