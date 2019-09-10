<template>
  <div id="t-out">
    <input type="button" value="最初からやり直す" @click="reload()" />
    <input type="button" value="採点" @click="scoring()" />
    <div id="terminal"></div>
  </div>
</template>

<script>
import io from 'socket.io-client'
import { Terminal } from 'xterm'
import * as fit from 'xterm/lib/addons/fit/fit'

let socket

export default {
  name: 'Terminal',
  props: {
    imageName: String
  },
  data: function () {
    return {
      userId: ''
    }
  },
  created: function () {
    this.userId = this.$store.getters.id
    fetch('/api/console/' + this.imageName, {
      method: 'POST',
      body: JSON.stringify({ userId: this.userId }),
      headers: new Headers({ 'Content-type': 'application/json' })
    }).then(function (response) {
      return response.json()
    }).then(function (response) {
      socket = io.connect('/' + response.containerId)
      let term = new Terminal()
      Terminal.applyAddon(fit)
      term.open(document.getElementById('terminal'))
      term.fit()
      socket.on('data', data => {
        term.write(data)
      })
      term.on('data', data => {
        socket.emit('data', data)
      })
      socket.on('disconnect', () => {
        term.destroy()
      })
    })
  },
  methods: {
    scoring: function () {
      socket.emit('data', '\x03') // ^C を送信
      socket.emit('data', this.imageName + '_sc.sh\n')
    },
    reload: function () {
      this.$router.go({ path: this.$router.currentRoute.path, force: true })
    }
  }
}
</script>

<style>
@import url("../../node_modules/xterm/dist/xterm.css");

/* TODO: ボタン追加に伴うシェルの高さの変更 */
#git-text {
  overflow: auto;
  height: calc(100vh - calc(20px + 300px - 5px));
}

#terminal {
  position: fixed;
  width: 100%;
  margin-left: -20px;
  margin-bottom: -5px;
  bottom: 0;
  height: 300px;
}

/* width: 1024px 以上 */
@media (min-width: 1024px) {
  #terminal {
    width: calc(90% - 200px);
  }
}
</style>
