<template>
  <div>
    <h1>Hello world!</h1>
    
    <a @click="addDie(1)"><img src="../assets/die-1.svg"></a>
    <a @click="addDie(2)"><img src="../assets/die-2.svg"></a>
    <a @click="addDie(3)"><img src="../assets/die-3.svg"></a>
    <a @click="addDie(4)"><img src="../assets/die-4.svg"></a>
    <a @click="addDie(5)"><img src="../assets/die-5.svg"></a>
    <a @click="addDie(6)"><img src="../assets/die-6.svg"></a>
    
    <p>
    <span>For {{ allDice }} = {{ sum }} ({{ diceExpr }}), roll this or higher : {{ prob }} </span>
    </p>
    <canvas id="dist-plot"></canvas>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Chart from 'chart.js';
import { RolledDice } from '../core/die'
import { sum } from '../core/arrays'

export default Vue.extend({
  name: 'DiceObservation',
  data: function(): {chart: Chart | null} {
    return  {
        chart: null
    }
  },
  methods: {
    addDie(value: number) {
      this.$store.commit('DieAdded', value)
    },
    createChart(chartId: string, data: Chart.ChartData, options: Chart.ChartOptions) {
      const ctx = document.getElementById(chartId) as HTMLCanvasElement;
      return new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options,
      });
    }
  },
  mounted() {
    this.chart = this.createChart('dist-plot', this.chartData, {});
  },
  updated() {
    this.chart!.data.labels = this.chartData.datasets[0].labels;
    this.chart!.data.datasets![0].data = this.chartData.datasets[0].data;

    const colors: string[] = new Array(this.chartData.datasets[0].data.length);
    colors.fill('rgba(0, 0, 0, 0.1)');
    const idx = this.chartData.datasets[0].labels.indexOf(this.sum);
    colors[idx] = 'green';
    this.chart!.data.datasets![0].backgroundColor = colors;
    this.chart!.update();
  },
  computed: {
    prob() {
      if (this.$store.state.dice.length === 0) {
        return NaN;
      }
      const dice: RolledDice = this.$store.getters.rolledDice;
      return dice.probs.same + dice.probs.higher;
    },
    chartData() {
      const dice: RolledDice = this.$store.getters.rolledDice;
      const p = dice.expectedDist.probs
      return {
        datasets: [{
          labels: Array.from(p.keys()),
          data: Array.from(p.values())
        }]
      };
    },
    diceExpr() {
      return `${this.$store.state.dice.length}d6`;
    },
    allDice() {
      return this.$store.state.dice
    },
    sum() {
      return sum(this.$store.state.dice)
    }
  }
});
</script>