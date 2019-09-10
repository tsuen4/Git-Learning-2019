<template>
  <div id="text-view">
    <md class="markdown-body"></md>
    <TerminalBlock image-name="git-branch"></TerminalBlock>
  </div>
</template>

<script>
import md from '@/assets/text/branch.md'
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
