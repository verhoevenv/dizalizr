import Vue from 'vue'
import Vuex from 'vuex'
import { RolledDice } from '@/core/die';

Vue.use(Vuex)

export interface Observation {
  timestamp: Date;
  value: number;
}

export default new Vuex.Store({
  state: {
    dice: new Array<number>(),
    observations: new Array<Observation>()
  },
  mutations: {
    DieAdded (state, payload: number) {
      state.dice.push(payload);
    },
    ObservationCommitted (state) {
      state.observations.push({
        timestamp: new Date(),
        value: new RolledDice(state.dice).probs.lower
      });
      state.dice = [];
    }
  },
  getters: {
    rolledDice: state => {
      return new RolledDice(state.dice);
    }
  },
  actions: {
  },
  modules: {
  }
})
