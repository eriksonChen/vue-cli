import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from './modules/auth'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuOpen: false,
    token:"",
  },
  mutations: {
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen;
    },
    setToken(state, token){
      state.token = token;
    }
  },
  actions: {
    toggleMenu({ commit }) {
      commit('toggleMenu')
    },
    setToken({commit}, token){
      $cookies.set('user_token', token, '1h');
      commit('setToken', token)
    },
    logout(){
      $cookies.remove("user_token");
      router.push({ name: "login" });
    }
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
