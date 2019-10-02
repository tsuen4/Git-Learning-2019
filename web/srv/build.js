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
  let opt = {
    AttachStdin: true,
    AttachStdout: true,
    AttachStderr: true,
    Tty: true,
    OpenStdin: true,
    StdinOnce: true,
    Env: env,
    Cmd: ['/bin/bash'],
    Image: imageName,
    Volumes: {},
    Binds: []
  }
  // opt.Volumes[MountPath] = {}
  const container = await docker.createContainer(opt)
  const stream = await container.attach({
    stream: true,
    stdin: true,
    stdout: true,
    stderr: true
  })
  nsps[container.id] = io.of(`/tutorial/${container.id}`)
  nsps[container.id].on('connect', event => {
    console.log(`run:${container.id}`)
    stream.on('data', d => {
      if (nsps[container.id]) nsps[container.id].emit('data', d.toString())
    })
    event.on('data', d => {
      stream.write(d)
    })
    event.on('disconnect', () => {
      container.remove({ force: true }, function (err, data) {
        console.log(`remove:${container.id}`)
        if (err) console.error(err)
        delete nsps[container.id]
      })
    })

    container.start()
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
