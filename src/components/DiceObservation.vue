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
    addDie(value: number) {
      store.commit('DieAdded', value)
    }
  },
  computed: {
    prob() {
      if (store.state.dice.length === 0) {
        return NaN;
      }
      const probs = analyze(store.state.dice);
      return probs.same + probs.higher;
    },
    diceExpr() {
      return `${store.state.dice.length}d6`;
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