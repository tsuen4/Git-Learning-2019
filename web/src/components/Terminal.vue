<template>
  <div id="terminal" />
</template>

<script>
import io from 'socket.io-client'
import { Terminal } from 'xterm'
import 'xterm/css/xterm.css'

export default {
  name: 'Terminal',
  props: {
    imageName: {
      type: String,
      required: true
    },
    exercise: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      userId: '',
      userName: '',
      socket: io
    }
  },
  created () {
    this.userId = this.$store.getters.id
    this.userName = this.$store.getters.name

    this.connectContainer(this.imageName)
  },
  methods: {
    scoring () {
      this.socket.emit('data', 'q') // less 抜け用の q
      this.socket.emit('data', '\x03') // ^C を送信
      this.socket.emit('data', `${this.imageName}_sc.sh\n`)
    },
    reload () {
      this.$router.go({ path: this.$router.currentRoute.path, force: true })
    },
    connectContainer (imageName) {
      // console.log(this.exercise)
      if (!this.exercise) return

      fetch(`/tutorial/api/console/${this.imageName}`, {
        method: 'POST',
        body: JSON.stringify({ userId: this.userId, userName: this.userName }),
        headers: new Headers({ 'Content-type': 'application/json' })
      }).then(response => response.json())
        .then(response => {
          this.socket = io.connect(`/tutorial/${response.containerId}`, { path: '/tutorial/socket.io' })
          const term = new Terminal({
            rows: 18,
            cols: 80
          })
          term.open(document.getElementById('terminal'))

          // コンテナとのデータのやり取り
          this.socket.on('data', data => {
            term.write(data)
          })
          term.onData(data => {
            this.socket.emit('data', data)
          })

          // 接続が切れたときの処理
          this.socket.on('disconnect', () => {
            term.dispose()
          })
        })
    }
  },
  watch: {
    imageName (changedName) {
      // imageName と同時に exercise(Boolean) も変更される

      if (this.socket.connected) this.socket.disconnect()
      this.connectContainer(changedName)
    }
  },
  beforeDestroy () {
    if (this.socket.connected) this.socket.disconnect()
  }
}
</script>

<style>
#terminal {
  position: fixed;
  bottom: 0;
}

/* width: 1024px 以上 */
@media (min-width: 1024px) {
  #terminal {
    width: calc(90% - 250px);
  }
}
</style>
