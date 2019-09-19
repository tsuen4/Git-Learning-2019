<template>
  <div id="text-view" class="markdown-body">
    <h1>Git-Learning</h1>
    <Login />
    <HowToUse />
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import HowToUse from '@/assets/text/how-to-use.md'

export default {
  name: 'home',
  components: {
    Login,
    HowToUse
  }
}
</script>

<style>
</style>
