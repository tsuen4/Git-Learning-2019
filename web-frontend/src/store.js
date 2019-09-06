'use strict'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: 'ログイン状況確認中…',
    name: '',
    status: false
  },
  mutations: {
    onAuthStateChanged (state, user) {
      // firebaseが返したユーザー情報
      state.id = user.email
      state.name = user.displayName
    },
    onUserStatusChanged (state, status) {
      // ログインしてるかどうか true or false
      state.status = status
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
    }
  }
})
