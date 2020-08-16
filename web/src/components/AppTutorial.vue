<template>
  <div id="tutorial">
    <div id="text" :class="{ existTerm: getData.exercise }">
      <MDText :tutorial-text="getData.text" />
      <Scoring v-if="getData.exercise" />
    </div>
    <template v-if="getData.exercise">
      <Terminal :image-name="imageName" :exercise="getData.exercise" />
    </template>
  </div>
</template>

<script>
import MDText from '@/components/MarkdownText.vue'
import Terminal from '@/components/Terminal.vue'
import Scoring from '@/components/Scoring.vue'
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
    MDText,
    Terminal,
    Scoring
  },
  props: {
    tutorialName: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      imageName: '',
      getData: {},
      existTerm: false
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

      // データ取得段階でイメージネームを指定
      this.imageName = `glc-${tutorialName}`
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
.existTerm {
  /* ターミナルの高さ分引く (rows 18 = 306px) */
  height: calc(100vh - 306px);
  overflow: auto;
}

#tutorial {
  margin-left: 250px;
}
</style>
