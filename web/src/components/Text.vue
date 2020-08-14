<template>
  <div class="markdown-body">
    {{ receivedText }}
  </div>
</template>

<script>
import axios from 'axios'

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
  }
}
</script>

<style>

</style>
