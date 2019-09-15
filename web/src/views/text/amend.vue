<template>
  <div id="text-view">
    <md class="markdown-body"></md>
    <TerminalBlock image-name="git-amend"></TerminalBlock>
  </div>
</template>

<script>
import md from '@/assets/text/amend.md'
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
