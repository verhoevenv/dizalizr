<template>
  <div>
    <h1>Hello world!</h1>

    <a @click="addDie(1)">
      <img src="../assets/die-1.svg" />
    </a>
    <a @click="addDie(2)">
      <img src="../assets/die-2.svg" />
    </a>
    <a @click="addDie(3)">
      <img src="../assets/die-3.svg" />
    </a>
    <a @click="addDie(4)">
      <img src="../assets/die-4.svg" />
    </a>
    <a @click="addDie(5)">
      <img src="../assets/die-5.svg" />
    </a>
    <a @click="addDie(6)">
      <img src="../assets/die-6.svg" />
    </a>

    <p>
      <span>For {{ allDice }} = {{ sum }} ({{ diceExpr }}), roll this or higher : {{ prob }}</span>
    </p>
    <canvas id="dist-plot"></canvas>
    <canvas id="probs-plot"></canvas>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Chart from "chart.js";
import { RolledDice } from "../core/die";
import { sum } from "../core/arrays";

export default Vue.extend({
  name: "DiceObservation",
  data: function(): { distChart: Chart | null; probChart: Chart | null } {
    return {
      distChart: null,
      probChart: null
    };
  },
  methods: {
    addDie(value: number) {
      this.$store.commit("DieAdded", value);
    },
    createChart(
      chartId: string,
      type: string,
      data: Chart.ChartData,
      options: Chart.ChartOptions
    ) {
      const ctx = document.getElementById(chartId) as HTMLCanvasElement;
      return new Chart(ctx, {
        type: type,
        data: data,
        options: options
      });
    }
  },
  mounted() {
    this.distChart = this.createChart(
      "dist-plot",
      "bar",
      this.distChartData,
      {}
    );
    this.probChart = this.createChart(
      "probs-plot",
      "horizontalBar",
      this.probChartData,
      {scales: {
        xAxes: [{
          stacked: true,
        }],
        yAxes: [{
          stacked: true,
        }],
      }}
    );
  },
  updated() {
    this.distChart!.data.labels = this.distChartData.datasets[0].labels;
    this.distChart!.data.datasets![0].data = this.distChartData.datasets[0].data;

    const colors: string[] = new Array(
      this.distChartData.datasets[0].data.length
    );
    colors.fill("rgba(0, 0, 0, 0.1)");
    const idx = this.distChartData.datasets[0].labels.indexOf(this.sum);
    colors[idx] = "green";
    this.distChart!.data.datasets![0].backgroundColor = colors;
    this.distChart!.update();

    this.probChart!.data.datasets![0].data = this.probChartData.datasets[0].data;
    this.probChart!.data.datasets![1].data = this.probChartData.datasets[1].data;
    this.probChart!.data.datasets![2].data = this.probChartData.datasets[2].data;
    this.probChart!.update();
  },
  computed: {
    prob() {
      if (this.$store.state.dice.length === 0) {
        return NaN;
      }
      const dice: RolledDice = this.$store.getters.rolledDice;
      return dice.probs.same + dice.probs.higher;
    },
    distChartData() {
      const dice: RolledDice = this.$store.getters.rolledDice;
      const p = dice.expectedDist.probs;
      return {
        datasets: [
          {
            labels: Array.from(p.keys()),
            data: Array.from(p.values())
          }
        ]
      };
    },
    probChartData() {
      const dice: RolledDice = this.$store.getters.rolledDice;
      const p = dice.probs;
      return {
        labels: ["a"],
        datasets: [
          {
            label: "lower",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            data: [p.lower]
          },
          {
            label: "same",
            backgroundColor: "green",
            data: [p.same]
          },
          {
            label: "higher",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            data: [p.higher]
          },
        ]
      };
    },
    diceExpr() {
      return `${this.$store.state.dice.length}d6`;
    },
    allDice() {
      return this.$store.state.dice;
    },
    sum() {
      return sum(this.$store.state.dice);
    }
  }
});
</script>