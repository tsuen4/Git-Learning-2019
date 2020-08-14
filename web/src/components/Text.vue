<template>
  <div class="markdown-body" v-html="compiledMarkdown" />
</template>

<script>
import axios from 'axios'
import marked from 'marked'
import hljs from 'highlight.js/lib/highlight'
import bash from 'highlight.js/lib/languages/bash'
import 'highlight.js/styles/github.css'

const getText = (tutorialName) => {
  return new Promise((resolve, reject) => {
    axios.get(`/tutorial/api/text/${tutorialName}`)
      .then(res => {
        // console.log(res.data)
        resolve(res.data)
      })
      .catch(res => {
        // console.error(res)
      })
  })
}

export default {
  props: {
    tutorialName: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      compiledMarkdown: ''
    }
  },
  mounted () {
    this.getAndCompile(this.tutorialName)

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
    async getAndCompile (tutorialName) {
      const receivedText = await getText(tutorialName)
      this.compiledMarkdown = marked(receivedText)
    }
  },
  watch: {
    // ルートが変更されたときに呼び出される
    tutorialName (changedName) {
      this.getAndCompile(changedName)
    }
  }
}
</script>

<style>
</style>
