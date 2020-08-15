<template>
  <div id="tutorial">
    <MDText :tutorial-text="getData.text" />
  </div>
</template>

<script>
import MDText from '@/components/MarkdownText.vue'
import axios from 'axios'

const getTutorial = (tutorialName) => {
  return new Promise((resolve, reject) => {
    axios.get(`/tutorial/api/tutorials/${tutorialName}`)
      .then(res => {
        // console.log(res.data)
        resolve(res.data)
      })
      .catch(err => {
        // console.error(err)
        reject(err)
      })
  })
}

export default {
  name: 'Tutorial',
  components: {
    MDText
  },
  props: {
    tutorialName: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      tutorial: '',
      getData: {}
    }
  },
  mounted () {
    this.setData(this.tutorialName)
  },
  methods: {
    async setData (tutorialName) {
      const data = await getTutorial(this.tutorialName)
      // console.log(data)
      this.getData = data
    }
  },
  watch: {
    tutorialName (changedName) {
      this.setData(changedName)
    }
  }
}
</script>

<style>
#tutorial {
  overflow: auto;
  margin-left: 250px;
}
</style>
