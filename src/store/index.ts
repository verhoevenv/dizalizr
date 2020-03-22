import Vue from 'vue'
import Vuex from 'vuex'

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
  actions: {
  },
  modules: {
  }
})
