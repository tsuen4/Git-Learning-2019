'use strict'
const Docker = require('dockerode')

const docker = new Docker()
let io
let nsps = {}

exports.init = http => {
  io = require('socket.io')(http, { path: '/tutorial/socket.io' })
}

exports.run = async (imageName, env = []) => {
  console.log(imageName)

  const opt = {
    Image: imageName,
    Cmd: ['/bin/bash'],
    Tty: true, // 標準入出力に必要
    OpenStdin: true, // 入力に必要
    StdinOnce: true, // 切断後に閉じる？
    Env: env
    // Volumes: {},
    // Binds: []
  }

  const container = await docker.createContainer(opt)
  const stream = await container.attach({
    stream: true,
    stdin: true,
    stdout: true,
    stderr: true
  })

  nsps[container.id] = io.of(`/tutorial/${container.id}`)

  // フロントから接続された時の処理
  nsps[container.id].on('connect', event => {
    console.log(`run:${container.id}`)

    // フロント側とのやりとり
    stream.on('data', data => {
      if (nsps[container.id]) nsps[container.id].emit('data', data.toString())
    })
    event.on('data', data => {
      stream.write(data)
    })

    // フロントから切断された時の処理
    event.on('disconnect', () => {
      container.remove({ force: true }, (err, data) => {
        console.log(`remove:${container.id}`)
        if (err) console.error(err)
        delete nsps[container.id]
      })
    })

    container.start()
    container.resize({ h: 18, w: 80 })
  })

  return container
}

// 30 分でコンテナを殺す
setInterval(() => {
  docker.listContainers((err, containers) => {
    if (err) return false
    // 稼働時間チェック => 30 分を超えたものをフィルター
    let unixtime = new Date().getTime() / 1000
    containers = containers.filter((element, index, array) => {
      if (unixtime - element.Created > 1800000) {
        return true
      }
    })
    // 殺す
    containers.forEach((containerInfo) => {
      // console.log(containerInfo.Image)
      let tmp = containerInfo.Image
      if (tmp.match(/^gl-.*/)) {
        return true
      } else {
        docker.getContainer(containerInfo.Id).stop(() => {
          console.log(`kill:${containerInfo.Id}`)
          return true
        })
      }
    })
  })
}, 10000)
