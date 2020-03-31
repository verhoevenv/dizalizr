import Vue from 'vue'
import Vuex from 'vuex'
import { RolledDice } from '@/core/die';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dice: new Array<number>()
  },
  mutations: {
    DieAdded (state, payload: number) {
      state.dice.push(payload);
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
