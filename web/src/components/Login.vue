<template>
  <div>
    <span>{{ status }}</span>
    <input v-if="!this.isSignedIn" type="button" value="Login" @click="signUp()" />
    <input v-else type="button" value="Logout" @click="signOut()" />
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
  beforeDestroy: function () {
    if (this.isSignedIn) {
      axios.post('/api/db/create-user', {
        id: this.id,
        name: this.name
      })
    }
  },
  computed: {
    id: function () {
      return this.$store.getters.id
    },
    name: function () {
      return this.$store.getters.name
    },
    status: function () {
      let role
      this.isAdmin ? role = '管理者'
        : this.isSignedIn ? role = '一般ユーザー'
          : role = '未ログイン'
      return (this.id + ' ' + role)
    }
  },
  methods: {
    signUp: () => {
      firebase.signUp()
    },
    signOut: () => {
      firebase.signOut()
    },
    onAuth: () => {
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
