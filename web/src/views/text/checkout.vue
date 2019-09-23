<template>
  <div id="text-view" :class="{ existTerm: true }">
    <md class="markdown-body"></md>
    <TerminalBlock image-name="git-checkout" />
  </div>
</template>

<script>
import md from '@/assets/text/checkout.md'
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
