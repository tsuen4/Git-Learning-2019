'use strict'
import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [persistedState({
    storage: window.sessionStorage,
    key: 'OECU-Git-Learning'
  })],
  state: {
    id: '',
    name: '',
    status: false,
    admin: false,
    loading: true
  },
  mutations: {
    onAuthStateChanged (state, user) {
      // firebaseが返したユーザー情報
      state.id = user.email
      state.name = user.displayName
    },
    onAuthAdminChanged (state, status) {
      state.admin = status
    },
    onUserStatusChanged (state, status) {
      // ログインしてるかどうか true or false
      state.status = status
    },
    isLoading (state, status) {
      state.loading = status
    }
  },
  getters: {
    id (state) {
      return state.id
    },
    name (state) {
      return state.name
    },
    isSignedIn (state) {
      return state.status
    },
    isAdmin (state) {
      return state.admin
    },
    isLoading (state) {
      return state.loading
    }
  }
})
