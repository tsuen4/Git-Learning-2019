<template>
  <div id="git-text">
    <md class="markdown-body"></md>
    <TerminalBlock></TerminalBlock>
  </div>
</template>

<script>
import md from '@/assets/text/github-flow.md'
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
