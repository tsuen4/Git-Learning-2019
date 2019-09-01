<template>
  <div id="terminal"></div>
</template>

<script>
import io from 'socket.io-client'
import { Terminal } from 'xterm'
import * as fit from 'xterm/lib/addons/fit/fit'

export default {
  name: 'Terminal',
  props: {
    imageName: String
  },
  created: function () {
    fetch('/api/console/git-' + this.imageName, {
      method: 'POST',
      body: JSON.stringify({}),
      headers: new Headers({ 'Content-type': 'application/json' })
    }).then(function (response) {
      return response.json()
    }).then(function (response) {
      let socket = io.connect('/' + response.containerId)
      Terminal.applyAddon(fit)
      let term = new Terminal({
        // cols: 120,
        // rows: 20
      })
      term.open(document.getElementById('terminal'))
      term.fit()
      console.log(term.rows, term.cols)

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
  }
}
</script>

<style>
@import url("../../node_modules/xterm/dist/xterm.css");

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
