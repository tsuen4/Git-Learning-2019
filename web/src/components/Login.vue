<template>
  <div class="login">
    <div v-if="isLoading">loading...</div>
    <div v-else>
      <span v-if="isSignedIn()" class="status">{{ this.$store.getters.id }}: {{ status }}</span>
      <input v-if="!isSignedIn()" type="button" class="btn" value="Login" @click="signUp()" />
      <input v-else type="button" class="btn" value="Logout" @click="signOut()" />
    </div>
  </div>
</template>

<script>
import firebase from '../firebase'
import axios from 'axios'

export default {
  name: 'login',
  created: function () {
    this.onAuth()
  },
  computed: {
    id: function () {
      return this.$store.getters.id
    },
    name: function () {
      return this.$store.getters.name
    },
    status: function () {
      return this.isAdmin() ? '管理者' : this.isSignedIn() ? '一般ユーザー' : ''
    },
    isLoading: function () {
      return this.$store.getters.isLoading
    }
  },
  methods: {
    signUp: () => {
      firebase.signUp()
    },
    signOut: () => {
      firebase.signOut()
    },
    onAuth: function () {
      firebase.onAuth()
    },
    isSignedIn: function () {
      return this.$store.getters.isSignedIn
    },
    isAdmin: function () {
      return this.$store.getters.isAdmin
    }
  }
}
</script>

<style>
.status {
  padding-right: 10px;
}
.login {
  display: table;
  margin: -65px 0 0 auto;
  height: 50px;
}
</style>
