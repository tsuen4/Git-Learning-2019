'use strict'
// const express = require('express')
const bodyParser = require('body-parser')
const build = require('./build')
const dbWrite = require('./db/db-write')
const dbRead = require('./db/db-read')
const users = require('./users')
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
  app.post('/api/console/:imagename', async (req, res) => {
    try {
      const container = await build.run(req.params.imagename, ['userId=' + req.body.userId, 'userName=' + req.body.userName])
      res.send({
        containerId: container.id
      })
      console.log(req.body.userId)
    } catch (error) {
      console.error(error)
    }
  })

  // 初回ログイン時にユーザーを登録する API
  app.post('/api/db/create-user', (req, res) => {
    dbWrite.createUser(req.body)
  })

  // 採点用 API
  app.post('/api/scoring/:exername', (req, res) => {
    switch (req.params.exername) {
      case 'create-repository':
        dbWrite.create_repository(req.body)
        break
      case 'commit':
        dbWrite.git_commit(req.body)
        break
      case 'branch':
        dbWrite.git_branch(req.body)
        break
      case 'merge':
        dbWrite.git_merge(req.body)
        break
      case 'amend':
        dbWrite.git_amend(req.body)
        break
      case 'no_edit':
        dbWrite.git_no_edit(req.body)
        break
      case 'checkout':
        dbWrite.git_checkout(req.body)
        break
      default:
        console.log('存在しない問題 id です')
        break
    }
    res.send('\n') // ターミナルの入力を可能にするため改行
  })

  // 解答者情報を返す API
  app.post('/api/db/get-ans', async (req, res) => {
    const data = await dbRead.answer()
    res.send(data)
  })

  // 管理者か確認する API
  app.post('/api/isadmin', (req, res) => {
    res.send(users.isAdmin(req.body.id))
  })
}
