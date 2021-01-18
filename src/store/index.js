import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuOpen: false,
  },
  mutations: {
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen;
    },
  },
  actions: {
    toggleMenu({ commit }) {
      commit('toggleMenu')
    },
  },
  modules: {
  }
})
