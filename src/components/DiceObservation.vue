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

    <button @click="addObservation">Commit</button>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr;">
      <DistributionChart v-bind:dice="rolledDice" />
      <ProbabilityChart v-bind:dice="rolledDice" />
      <div style="grid-column-start: 1; grid-column-end: 3;">
        <TimeChart v-bind:observations="observations" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Chart from "chart.js";
import { RolledDice } from "../core/die";
import { sum } from "../core/arrays";
import DistributionChart from "./DistributionChart.vue"
import ProbabilityChart from "./ProbabilityChart.vue"
import TimeChart from "./TimeChart.vue"

export default Vue.extend({
  name: "DiceObservation",
  methods: {
    addDie(value: number) {
      this.$store.commit("DieAdded", value);
    },
    addObservation() {
      this.$store.commit("ObservationCommitted");
    }
  },

  computed: {
    rolledDice() {
      return this.$store.getters.rolledDice;
    },
    prob() {
      if (this.$store.state.dice.length === 0) {
        return NaN;
      }
      const dice: RolledDice = this.$store.getters.rolledDice;
      return dice.probs.same + dice.probs.higher;
    },
    
    diceExpr() {
      return `${this.$store.state.dice.length}d6`;
    },
    allDice() {
      return this.$store.state.dice;
    },
    sum() {
      return this.$store.getters.rolledDice.sum;
    },
    observations() {
      return this.$store.state.observations;
    }
  },
  components: {
    DistributionChart,
    ProbabilityChart,
    TimeChart
  }
});
</script>