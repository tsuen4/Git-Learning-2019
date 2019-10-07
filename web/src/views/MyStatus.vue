<template>
  <div id="text-view" class="markdown-body">
    <h1>解答状況</h1>
    <table>
      <tr>
        <th>教材名</th>
        <th>問題名</th>
        <th>解答状況</th>
        <th>正誤</th>
      </tr>
      <tr v-for="ans in ansData" :key="ans.name && ans.exer">
        <td>{{ ans.name }}</td>
        <td>{{ ans.exer }}</td>
        <td>{{ rw(ans.answer) }}</td>
        <td>{{ rw(ans.correct) }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'my-status',
  data: () => {
    return {
      ansData: null
    }
  },
  created: function () {
    // アクセス後
    axios.post('/tutorial/api/db/get-my-status', { id: this.$store.getters.id })
      .then(res => { this.ansData = res.data })

    // 5 秒毎に取得しにいく
    setInterval(() => {
      axios.post('/tutorial/api/db/get-my-status', { id: this.$store.getters.id })
        .then(res => { this.ansData = res.data })
    }, 5000)
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
