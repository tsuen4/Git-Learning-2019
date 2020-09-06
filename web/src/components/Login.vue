<template>
  <div class="login">
    <div v-if="isLoading">loading...</div>
    <div v-else>
      <span v-if="isSignedIn()" class="status">{{ this.$store.getters.id }}: {{ status }}</span>
      <Button v-if="!isSignedIn()" type="button" class="btn" @click="signUp()">Login</Button>
      <Button v-else type="button" class="btn" @click="signOut()">Logout</Button>
    </div>
  </div>
</template>

<script>
import firebase from '../firebase'
import Button from '@/components/Button.vue'

export default {
  name: 'login',
  components: {
    Button
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

<style scoped>
.status {
  padding-right: 10px;
}

.login {
  display: block;
  height: 40px;
  background-color: bisque;
}
</style>
