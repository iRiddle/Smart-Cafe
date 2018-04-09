import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState()
  ],
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
      state.isUserLoggedIn = !!(token)
    },
    SET_USER (state, user) {
      state.user = user
    }
  },
  actions: {
    setToken ({ commit }, token) {
      commit('SET_TOKEN', token)
    },
    setUser ({ commit }, user) {
      commit('SET_USER', user)
    }
  }
})
