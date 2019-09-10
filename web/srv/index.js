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
      const container = await build.run(req.params.imagename, ['userId=' + req.body.userId])
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

  // 「変更内容の記録」の採点 API
  app.post('/api/scoring/commit', (req, res) => {
    dbWrite.git_commit(req.body)
    res.send('\n') // ターミナルの入力を可能にするため改行
  })

  // 「ブランチによる分岐と統合」の「ブランチ」採点 API
  app.post('/api/scoring/branch', (req, res) => {
    dbWrite.git_branch(req.body)
    res.send('\n') // ターミナルの入力を可能にするため改行
  })

  // 「ブランチによる分岐と統合」の「マージ」採点 API
  app.post('/api/scoring/merge', (req, res) => {
    dbWrite.git_merge(req.body)
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
