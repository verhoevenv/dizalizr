<template>
  <div>
    <canvas id="probs-plot"></canvas>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import Chart from "chart.js";
import { RolledDice } from "../core/die";
import { sum } from "../core/arrays";

export default Vue.extend({
  name: "ProbabilityChart",
  data: function(): { probChart: Chart | null} {
    return {
      probChart: null
    };
  },
  props: {
    dice: {
      type: Object as PropType<RolledDice>,
      required: true
    }
  },
  methods: {
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
  watch: {
    probChartData: function() {
      this.probChart!.data.datasets![0].data = this.probChartData.datasets[0].data;
      this.probChart!.data.datasets![1].data = this.probChartData.datasets[1].data;
      this.probChart!.data.datasets![2].data = this.probChartData.datasets[2].data;
      this.probChart!.update();
    },
  },
  computed: {
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
  }
});
</script>