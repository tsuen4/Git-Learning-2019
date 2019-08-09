<template>
  <div id="git-text">
    <md class="markdown-body"></md>
    <TerminalBlock></TerminalBlock>
  </div>
</template>

<script>
import md from '@/assets/text/git-commit.md'
import TerminalBlock from '@/components/Terminal.vue'

export default {
  components: {
    md,
    TerminalBlock
  }
}
</script>

<style>
</style>
