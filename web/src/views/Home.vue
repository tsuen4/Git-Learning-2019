<template>
  <div id="text-view" class="markdown-body">
    <h1>Git-Learning</h1>
    <Login />
    <MDText tutorial-name="how-to-use" />
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import MDText from '@/components/MarkdownText.vue'

export default {
  name: 'home',
  components: {
    Login,
    MDText
  }
}
</script>

<style>
</style>
