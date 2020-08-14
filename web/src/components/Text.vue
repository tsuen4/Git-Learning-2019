<template>
  <div class="markdown-body" v-html="compiledMarkdown" />
</template>

<script>
import axios from 'axios'
import marked from 'marked'

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
  },
  computed: {
    compiledMarkdown () { return marked(this.receivedText) }
  }
}
</script>

<style>
</style>
