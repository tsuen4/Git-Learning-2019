<template>
  <div id="text-view" class="markdown-body">
    <h1>Git-Learning</h1>
    <Login />
    <div v-if="this.$store.getters.isSignedIn">
      <input type="radio" id="git" value="git" name="materials" v-model="picked" />
      <label for="git">Git</label>
      <input type="radio" id="github" value="github" name="materials" v-model="picked" />
      <label for="github">GitHub Flow</label>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
export default {
  name: 'home',
  components: {
    Login
  },
  computed: {
    picked: {
      get: function () {
        return this.$store.getters.materials
      },
      set: function (value) {
        this.$store.commit('onMaterialChanged', value)
      }
    }
  }
}
</script>

<style>
</style>
