<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <input type="button" value="Login" @click="signUp()" />
    <input type="button" value="Logout" @click="signOut()" />
    <span>{{ status }}</span>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import firebase from '../firebase'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
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
      if (this.$store.getters.isSignedIn) {
        // createUser
        axios.post('/api/db/create-user', {
          id: this.id,
          name: this.name
        })
      }
      return this.$store.getters.id
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
    }
  }
}
</script>
