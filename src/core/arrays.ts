//from https://stackoverflow.com/questions/12303989/cartesian-product-of-multiple-arrays-in-javascript/36234242#36234242
export function cartesianProduct<T>(arr: T[][]) {
    return arr.reduce(function(a, b){
        return a.map(function(x){
            return b.map(function(y){
                return x.concat([y]);
            })
        }).reduce(function(a,b){ return a.concat(b) }, new Array<T[]>())
    }, new Array<T[]>(new Array<T>()))
}

export function sum(arr: number[] | IterableIterator<number>) {
    let totalSum = 0;
    for (const v of arr) {
        totalSum += v;
    }
    return totalSum;
}