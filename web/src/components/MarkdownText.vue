<template>
  <div class="markdown-body" v-html="compiledMarkdown" />
</template>

<script>
import marked from 'marked'
import hljs from 'highlight.js/lib/highlight'
import bash from 'highlight.js/lib/languages/bash'
import 'highlight.js/styles/github.css'
import 'github-markdown-css/github-markdown.css'

export default {
  props: {
    tutorialText: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      compiledMarkdown: ''
    }
  },
  mounted () {
    this.markdownToHTML(this.tutorialText)

    // Markdown 内のシンタックスハイライト設定
    hljs.registerLanguage('bash', bash)
    marked.setOptions({
      highlight: (code, lang, callback) => {
        return hljs.highlight(lang, code).value
      }
    })
  },
  methods: {
    // Markdown を取得して HTML に変換する
    async markdownToHTML (tutorialText) {
      if (!tutorialText) return
      this.compiledMarkdown = marked(tutorialText)
    }
  },
  watch: {
    // props: tutorialText 変更されたときに呼び出される
    tutorialText (changedText) {
      this.markdownToHTML(changedText)
    }
  }
}
</script>

<style>
</style>
