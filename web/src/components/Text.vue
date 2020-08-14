<template>
  <div class="markdown-body" v-html="compiledMarkdown" />
</template>

<script>
import axios from 'axios'
import marked from 'marked'
import hljs from 'highlight.js/lib/highlight'
import bash from 'highlight.js/lib/languages/bash'
import 'highlight.js/styles/github.css'

export default {
  props: {
    tutorialName: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      receivedText: ''
    }
  },
  created () {
    axios.get(`/tutorial/api/text/${this.tutorialName}`)
      .then(res => {
        // console.log(res.data)
        this.receivedText = res.data
      })
      .catch(res => {
        // console.error(res)
      })

    // Markdown 内のシンタックスハイライト設定
    hljs.registerLanguage('bash', bash)
    marked.setOptions({
      highlight: (code, lang, callback) => {
        return hljs.highlight(lang, code).value
      }
    })
  },
  computed: {
    compiledMarkdown () { return marked(this.receivedText) }
  }
}
</script>

<style>
</style>
