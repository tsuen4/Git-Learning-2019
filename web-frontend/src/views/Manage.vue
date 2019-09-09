<template>
  <div id="manage-view" class="markdown-body">
    <h1>解答状況</h1>
    <div v-for="ans in ansData" :key="ans.name && ans.exer">
      <h2>{{ans.name}}: {{ ans.exer }}</h2>
      <table>
        <tr>
          <td>解答者数: {{ ans.answer }}</td>
          <td>正解者数: {{ ans.correct }}</td>
          <td>正答率: {{ ans.correct / ans.answer * 100 }} %</td>
        </tr>
      </table>
      <table>
        <tr>
          <td>ID</td>
          <td>名前</td>
          <td>回答状況</td>
          <td>正誤</td>
        </tr>
        <tr v-for="userItem in ans.user" :key="userItem.id">
          <td>{{ userItem.id }}</td>
          <td>{{ userItem.name }}</td>
          <td>{{ rw(userItem.ans) }}</td>
          <td>{{ rw(userItem.correct) }}</td>
        </tr>
      </table>
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
    axios.post('/api/db/get-ans')
      .then(res => { this.ansData = res.data })
    console.log(this.ansData)
  },
  methods: {
    rw: (num) => {
      return num === 1 ? '○' : '×'
    }
  }
}
</script>

<style>
</style>
