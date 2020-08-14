<template>
  <div id="text-view" class="markdown-body">
    <h1>Git-Learning</h1>
    <Login />
    <TextComponent tutorial-name="how-to-use" />
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import TextComponent from '@/components/Text.vue'

export default {
  name: 'home',
  components: {
    Login,
    TextComponent
  }
}
</script>

<style>
</style>
