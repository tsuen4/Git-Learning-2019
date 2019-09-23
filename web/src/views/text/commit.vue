<template>
  <div id="text-view" :class="{ existTerm: true }">
    <md class="markdown-body"></md>
    <TerminalBlock image-name="git-commit" />
  </div>
</template>

<script>
import md from '@/assets/text/commit.md'
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
