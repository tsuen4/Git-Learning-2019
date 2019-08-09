<template>
  <div id="git-text">
    <md></md>
    <TerminalBlock></TerminalBlock>
  </div>
</template>

<script>
import md from '@/assets/text/create-repository.md'
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
