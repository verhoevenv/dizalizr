<template>
  <div>
    <canvas id="dist-plot"></canvas>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import Chart from "chart.js";
import { RolledDice } from "../core/die";
import { sum } from "../core/arrays";

export default Vue.extend({
  name: "DistributionChart",
  data: function(): { distChart: Chart | null} {
    return {
      distChart: null
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
    this.distChart = this.createChart(
      "dist-plot",
      "bar",
      this.distChartData,
      {}
    );
  },
  watch: {
    distChartData: function() {
      this.distChart!.data.labels = this.distChartData.datasets[0].labels;
      this.distChart!.data.datasets![0].data = this.distChartData.datasets[0].data;

      const colors: string[] = new Array(
        this.distChartData.datasets[0].data.length
      );
      colors.fill("rgba(0, 0, 0, 0.1)");
      const idx = this.distChartData.datasets[0].labels.indexOf(this.dice.sum);
      colors[idx] = "green";
      this.distChart!.data.datasets![0].backgroundColor = colors;
      this.distChart!.update();
    }
  },
  computed: {
    distChartData() {
      const dice: RolledDice = this.dice;
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
  }
});
</script>