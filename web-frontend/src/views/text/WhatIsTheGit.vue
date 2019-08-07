<template>
  <div id="git-text">
    <vue-markdown :source="source"></vue-markdown>
  </div>
</template>

<script>
import md from '@/assets/text/what-is-the-git.md'
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    VueMarkdown
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
#git-text {
  padding-bottom: 300px;
}
</style>
