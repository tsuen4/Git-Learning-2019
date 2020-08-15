'use strict'
const { join } = require('path')
const { readFile } = require('fs')
const express = require('express')
const build = require('./build')
const dbWrite = require('./db/db-write')
const dbRead = require('./db/db-read')
const users = require('./users')

export default (app, http) => {
  build.init(http)

  app.use(express.json())
  app.use(express.urlencoded({
    extended: true
  }))

  app.use('/tutorial', express.static(join(__dirname, '../dist')))

  // shell on docker
  app.post('/tutorial/api/console/:imagename', async (req, res) => {
    try {
      const container = await build.run(req.params.imagename, ['userId=' + req.body.userId, 'userName=' + req.body.userName])
      res.send({
        containerId: container.id
      })
      console.log(req.body.userId)
    } catch (error) {
      console.error(error)
      res.status(500)
    }
  })

  const getText = (fileName) => {
    return new Promise((resolve, reject) => {
      const relativePath = `./text/${fileName}.md`
      const filePath = join(__dirname, relativePath)
      // console.log(filePath)

      readFile(filePath, 'utf-8', (err, data) => {
        if (err) reject(err)
        resolve(data)
      })
    })
  }

  app.get('/tutorial/api/text/:name', async (req, res) => {
    const fileName = req.params.name
    const textData = await getText(fileName)
    res.send(textData)
  })

  const tutorials = {
    'how-to-use': {
      exercise: false
    },
    'what-is-the-git': {
      exercise: false
    },
    'git-create-repository': {
      exercise: true,
      exerciseContent: [
        'ディレクトリ hello-git の作成ができたか',
        'hello-git リポジトリの作成ができたか'
      ]
    },
    'git-commit': {
      exercise: true,
      exerciseContent: [
        'hello.txt の作成ができたか',
        'hello.txt がコミットされているか'
      ]
    },
    'git-branch': {
      exercise: true,
      exerciseContent: [
        'edit-hello ブランチの作成ができたか',
        'edit-hello ブランチの変更が master にマージできているか'
      ]
    },
    'git-amend': {
      exercise: true,
      exerciseContent: [
        '直前のコミットメッセージの変更ができたか',
        '直前のコミットにファイルの追加ができたか'
      ]
    },
    'git-checkout': {
      exercise: true,
      exerciseContent: [
        '作業の取り消しができたか'
      ]
    },
    'github-create-repository': {
      exercise: true,
      exerciseContent: [
        'リモートリポジトリとの連携ができたか',
        'GitHub にプッシュできたか'
      ]
    }
  }

  app.get('/tutorial/api/tutorials/:name', async (req, res) => {
    const tutorialName = req.params.name
    // console.log(tutorialName)

    const hasTutorial = tutorials.hasOwnProperty(tutorialName)
    if (hasTutorial) {
      const data = tutorials[tutorialName]
      data.text = await getText(tutorialName)
      res.send(data)
    } else {
      res.status(404)
    }

    res.end()
  })

  app.post('/tutorial/api/db/:operation', async (req, res) => {
    switch (req.params.operation) {
      case 'create-user':
        // 初回ログイン時にユーザーを登録する API
        dbWrite.createUser(req.body)
        res.end()
        break
      case 'isadmin':
        // 管理者か確認する API
        res.send(users.isAdmin(req.body.id))
        break
      case 'get-ans':
        // 解答者情報を返す API
        const ansData = await dbRead.answer()
        res.send(ansData)
        break
      case 'get-my-status':
        const myAns = await dbRead.myAnswer(req.body.id)
        res.send(myAns)
        break
      default:
        console.log('存在しない URI です。')
    }
  })

  // 採点用 API
  app.post('/tutorial/api/scoring/:exername', (req, res) => {
    dbWrite.regAnswer(req.body, req.params.exername)
    res.send('\n') // ターミナルの入力を可能にするため改行
  })
}
