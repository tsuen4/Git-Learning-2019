<template>
  <div id="text-view" :class="{ existTerm: true }">
    <md class="markdown-body"></md>
    <TerminalBlock image-name="create-repository" />
  </div>
</template>

<script>
import md from '@/assets/text/create-repository.md'
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
