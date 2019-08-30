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
    this.loginStatus()
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
      const provider = new firebase.auth.GoogleAuthProvider()
      provider.setCustomParameters({
        hd: 'oecu.jp'
      })
      firebase.auth().signInWithRedirect(provider)
    },
    signOut: () => {
      firebase.auth().signOut()
    },
    loginStatus: function () {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.$store.commit('onAuthStateChanged', user.email)
          this.$store.commit('onUserStatusChanged', true)
        } else {
          this.$store.commit('onAuthStateChanged', '')
          this.$store.commit('onUserStatusChanged', false)
        }
      })
    }
  }
}
</script>
