<template>
  <div id="text-view" class="markdown-body">
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
          <th>ID</th>
          <th>解答状況</th>
          <th>正誤</th>
          <th>解答時刻</th>
        </tr>
        <tr v-for="userItem in ans.user" :key="userItem.id">
          <td>{{ userItem.id }}</td>
          <td>{{ rw(userItem.answer) }}</td>
          <td>{{ rw(userItem.correct) }}</td>
          <td>{{ parseDate(userItem.updatedAt) }}</td>
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
    // アクセス後
    axios.post('/tutorial/api/db/get-ans')
      .then(res => { this.ansData = res.data })

    // 5 秒毎に取得しにいく
    setInterval(() => {
      axios.post('/tutorial/api/db/get-ans')
        .then(res => { this.ansData = res.data })
    }, 5000)
  },
  methods: {
    rw: (num) => {
      return num === 1 ? '○' : '×'
    },
    parseDate: (date) => {
      // UTC +9
      date = new Date(date.substring(0, 19)) // -> YYYY-MM-DD hh:mm:dd
      date = new Date(date.setHours(date.getHours() + 9)) // Thu Sep 26 2019 14:05:20 GMT+0900 (日本標準時)
      date = date.toString().split('GMT')[0]
      return date
    }
  }
}
</script>

<style>
</style>
