<template>
  <div id="terminal"></div>
</template>

<script>
import io from 'socket.io-client'
import { Terminal } from 'xterm'
import * as fit from 'xterm/lib/addons/fit/fit'

export default {
  name: 'Terminal',
  beforeCreate: () => {
    fetch('/api/console/ubuntu', {
      method: 'POST',
      body: JSON.stringify({}),
      headers: new Headers({ 'Content-type': 'application/json' })
    }).then(function (response) {
      return response.json()
    }).then(function (response) {
      let socket = io.connect('/' + response.containerId)
      let term = new Terminal({
        cols: 120, // Set the terminal's width to 120 columns
        rows: 40 // Set the terminal's height to 80 rows
      })
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
  }
}
</script>

<style>
@import url("../../node_modules/xterm/dist/xterm.css");

#git-text {
  padding-bottom: 300px;
}
</style>
