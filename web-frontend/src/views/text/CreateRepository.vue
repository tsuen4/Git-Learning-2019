<template>
  <div id="git-text">
    <vue-markdown :source="source"></vue-markdown>
    <TerminalBlock></TerminalBlock>
  </div>
</template>

<script>
import md from '@/assets/text/create-repository.md'
import VueMarkdown from 'vue-markdown'
import TerminalBlock from '@/components/Terminal.vue'

export default {
  components: {
    VueMarkdown,
    TerminalBlock
  },
  data: () => {
    return {
      // raw データの取得
      source: md.source
    }
  }
}
</script>

<style>
</style>
