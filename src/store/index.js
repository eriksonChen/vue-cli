import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from './modules/auth'

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
    auth
  },
  plugins: [createPersistedState({
    storage: window.localStorage,
      reducer(val){
        return {
          auth: val.auth
        }
      }
  })]
})
