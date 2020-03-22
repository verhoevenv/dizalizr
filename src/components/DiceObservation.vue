<template>
  <div>
    <h1>Hello world!</h1>
    <select v-model="selected1">
      <option selected value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </select>
    <button @click="addDie">Add!</button>
    <p>
    <span>For {{ allDice }} = {{ sum }}, roll this or higher : {{ prob }} </span>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '../store'
import { analyze } from '../core/die'
import { sum } from '../core/arrays'

export default Vue.extend({
  name: 'DiceObservation',
  data: function() {
    return  {
      selected1: ''
    }
  },
  methods: {
    addDie() {
      store.commit('DieAdded', parseInt(this.selected1))
    }
  },
  computed: {
    prob() {
      const probs = analyze(store.state.dice);
      return probs.same + probs.higher;
    },
    allDice() {
      return store.state.dice
    },
    sum() {
      return sum(store.state.dice)
    }
  }
});
</script>