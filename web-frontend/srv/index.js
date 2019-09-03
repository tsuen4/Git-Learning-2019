'use strict'
// const express = require('express')
const bodyParser = require('body-parser')
const build = require('./build')
// const path = require('path')

export default (app, http) => {
  build.init(http)

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))

  // app.use('/node_modules', express.static(__dirname + '/node_modules'))
  // app.use(express.static(path.join(__dirname, '../dist')))

  // shell on docker
  app.post('/api/console/:imagename', async function (req, res) {
    try {
      const container = await build.run(req.params.imagename, ['userId=' + req.body.userId])
      res.send({
        containerId: container.id
      })
    } catch (error) {
      console.error(error)
    }
  })

  app.post('/api/scoring/commit', function (req, res) {
    // リクエストボディを出力
    console.log(req.body)

    res.send(req.body)
  })
}
