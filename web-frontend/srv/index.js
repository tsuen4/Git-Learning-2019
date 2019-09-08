'use strict'
// const express = require('express')
const bodyParser = require('body-parser')
const build = require('./build')
const dbWrite = require('./db-write')
const dbRead = require('./db-read')
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
    // console.log(req.body)
    // res.send(req.body)
    dbWrite.git_commit(req.body)
    res.send('\n') // ターミナルの入力を可能にするため改行
  })

  // 「ブランチによる分岐と統合」の「ブランチ」採点 API
  app.post('/api/scoring/branch', (req, res) => {
    // リクエストボディを出力
    // res.send(req.body)
    dbWrite.git_branch(req.body)
    res.send('\n') // ターミナルの入力を可能にするため改行
  })

  // 「ブランチによる分岐と統合」の「マージ」採点 API
  app.post('/api/scoring/merge', (req, res) => {
    // リクエストボディを出力
    // res.send(req.body)
    dbWrite.git_merge(req.body)
    res.send('\n') // ターミナルの入力を可能にするため改行
  })

  // 解答者情報を返す API
  app.post('/api/db/get-ans', async (req, res) => {
    const data = await dbRead.answer()
    res.send(data)
  })
}
