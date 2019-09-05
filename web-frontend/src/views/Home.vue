<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <input type="button" value="Login" @click="signUp()" />
    <input type="button" value="Logout" @click="signOut()" />
    <span>{{ user }}: {{ status }}</span>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created: function () {
    this.onAuth()
  },
  computed: {
    user: function () {
      return this.$store.getters.user
    },
    status: function () {
      if (this.$store.getters.isSignedIn) {
        return 'logined'
      } else {
        return 'not login'
      }
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
