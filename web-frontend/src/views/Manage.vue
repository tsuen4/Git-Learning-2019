<template>
  <div id="manage-view" class="markdown-body">
    <h1>解答状況</h1>
    <div v-for="exer in ansData" :key="exer.name">
      <div v-for="ans in exer.exer" :key="ans.id">
        <h2>{{exer.name}}: {{ ans.name }}</h2>
        <table>
          <tr>
            <td>解答者: {{ ans.answer }}</td>
            <td>正解者: {{ ans.correct }}</td>
            <td>正答率: {{ ans.correct/ans.correct * 100 }} %</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'manage',
  data: () => {
    return {
      ansData: null
    }
  },
  created: function () {
    this.getAnswers()
  },
  methods: {
    getAnswers: function () {
      axios.post('/api/db/get-ans-count')
        .then(res => { this.ansData = res.data })
    }
  }
}
</script>

<style>
</style>
