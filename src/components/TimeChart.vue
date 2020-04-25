<template>
  <div>
    <canvas id="time-plot"></canvas>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import Chart from "chart.js";
import { RolledDice } from "../core/die";
import { sum } from "../core/arrays";
import { Observation } from '../store';

export default Vue.extend({
  name: "TimeChart",
  data: function(): { timeChart: Chart | null } {
    return {
      timeChart: null
    };
  },
  props: {
    observations: {
      type: Array as PropType<Observation[]>,
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
    this.timeChart = this.createChart(
      "time-plot",
      "line",
      this.timeChartData,
      {
        scales: {
          xAxes: [{
            type: 'time'
          }]
        }
      }
    );
  },
  watch: {
    timeChartData: function() {
      this.timeChart!.data = this.timeChartData;
      this.timeChart!.update();
    }
  },
  computed: {
    timeChartData(): Chart.ChartData {
      const p = this.observations.map(({timestamp, value}) => ({x: timestamp, y: value}));
      return {
        datasets: [
          {
            label: "lower",
            data: p,
            cubicInterpolationMode: 'monotone',
            lineTension: 0
          }
        ]
      };
    },
  }
});
</script>