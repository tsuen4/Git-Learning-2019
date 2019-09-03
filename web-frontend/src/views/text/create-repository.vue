<template>
  <div id="git-text">
    <md class="markdown-body"></md>
    <TerminalBlock image-name="git-create-repository" />
  </div>
</template>

<script>
import md from '@/assets/text/create-repository.md'
import TerminalBlock from '@/components/Terminal.vue'

export default {
  name: 'git-text',
  components: {
    md,
    TerminalBlock
  }
}
</script>

<style>
</style>
