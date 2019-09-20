<template>
  <div id="text-view">
    <md class="markdown-body"></md>
    <TerminalBlock image-name="github-create-repository" />
  </div>
</template>

<script>
import md from '@/assets/text/github-create-repository.md'
import TerminalBlock from '@/components/Terminal.vue'

export default {
  name: 'text-view',
  components: {
    md,
    TerminalBlock
  }
}
</script>

<style>
</style>
