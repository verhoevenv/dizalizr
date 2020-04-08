import Benchmark from 'benchmark';

import { UniformDistribution, SlowSumDistribution, SumDistribution, ScalarMultipleDistribution } from '../../src/core/probability'

//seems missing in the type declarations
type PatchedBenchmark = Benchmark & {name: string};

const d6 = new UniformDistribution(6);

// 5d6
const suite1 = new Benchmark.Suite;
const fiveD6 = Array<UniformDistribution>(5).fill(d6);
suite1
.add('SlowSumDistribution 5d6', function() {
    new SlowSumDistribution(fiveD6).probs
})
.add('SumDistribution 5d6', function() {
    new SumDistribution(fiveD6).probs
})
.add('ScalarMultipleDistribution 5d6', function() {
    new ScalarMultipleDistribution(d6, 5).probs
})
// add listeners
.on('cycle', function(event: Benchmark.Event) {
  console.log(String(event.target));
})
.on('complete', function(this: Benchmark.Suite) {
  console.log('Fastest is ' + this.filter('fastest').map((x: PatchedBenchmark) => x.name));
})
.run();


// SumDistribution vs ScalarMultipleDistribution
// this shows that scalar outperforms sum for n > 8
// the difference is unlikely to matter for n <= 8 (everything is fast for small n)
for (let i = 1; i < 20; i++) {
    const suite2 = new Benchmark.Suite;
    const iD6 = Array<UniformDistribution>(i).fill(d6);
    suite2
    .add(`SumDistribution ${i}d6`, function() {
        new SumDistribution(iD6).probs
    }, { maxTime: 1 })
    .add(`ScalarMultipleDistribution ${i}d6`, function() {
        new ScalarMultipleDistribution(d6, i).probs
    }, { maxTime: 1 })
    .on('complete', function(this: Benchmark.Suite) {
    console.log('Fastest is ' + this.filter('fastest').map((x: PatchedBenchmark) => x.name));
    })
    .run();
}

// ScalarMultipleDistribution
// this shows that there are 'bumps' in performance at powers of 2
// unlikely to matter but an interesting implementation phenomenon
const suite3 = new Benchmark.Suite;
for (let i = 1; i < 130; i ++) {
    suite3.add(`ScalarMultipleDistribution ${i}d6`, function() {
        new ScalarMultipleDistribution(d6, i).probs
    }, { maxTime: 1 })        
}
suite3
.on('cycle', function(event: Benchmark.Event) {
  console.log(String(event.target));
})
.run();