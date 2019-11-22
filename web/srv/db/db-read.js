'use strict'
const table = require('./table')
const exercise = table.exercise

const tutorialName = [
  'リポジトリの作成',
  '変更内容の記録',
  'ブランチによる分岐と統合',
  'コミットのやり直し',
  '作業の取り消し',
  'GitHub へプッシュ'
]
const exerName = [
  'リポジトリを作成できたか',
  'コミットできたか',
  'ブランチを切れたか',
  'マージできたか',
  '直前のコミットメッセージを変更できたか',
  '直前のコミットにファイルを追加できたか',
  '作業の取り消しができたか',
  'リモートリポジトリの作成と連携ができたか',
  'GitHub にプッシュできたか'
]

// キーはテーブル名と同じに
const tutorialData = {
  create_repository: {
    name: tutorialName[0],
    exer: exerName[0],
    answer: 0,
    correct: 0
  },
  commit: {
    name: tutorialName[1],
    exer: exerName[1],
    answer: 0,
    correct: 0
  },
  branch: {
    name: tutorialName[2],
    exer: exerName[2],
    answer: 0,
    correct: 0
  },
  merge: {
    name: tutorialName[2],
    exer: exerName[3],
    answer: 0,
    correct: 0
  },
  amend: {
    name: tutorialName[3],
    exer: exerName[4],
    answer: 0,
    correct: 0
  },
  no_edit: {
    name: tutorialName[3],
    exer: exerName[5],
    answer: 0,
    correct: 0
  },
  checkout: {
    name: tutorialName[4],
    exer: exerName[6],
    answer: 0,
    correct: 0
  },
  remote: {
    name: tutorialName[5],
    exer: exerName[7],
    answer: 0,
    correct: 0
  },
  push: {
    name: tutorialName[5],
    exer: exerName[8],
    answer: 0,
    correct: 0
  }
}

const counter = async (ansTable) => {
  const getAnsCount = ansTable

  await table.Answers.count({ where: { 'answer': 1 }, group: ['exer'] })
    .then(count => {
      for (let data of count) {
        getAnsCount[data.exer].answer = data.count
      }
    })
  await table.Answers.count({ where: { 'correct': 1 }, group: ['exer'] })
    .then(count => {
      for (let data of count) {
        getAnsCount[data.exer].correct = data.count
      }
    })
  return getAnsCount
}

const userList = async (countedData) => {
  for (let exer of exercise) {
    await table.Answers.findAll({ where: { exer: exer }, order: [['id', 'ASC']] })
      .then(results => {
        // user 配列を追加 & 2 回目以降は配列を空にして入れ直す
        countedData[exer].user = []
        results.forEach(r => {
          countedData[exer].user.push(r.get())
        }
        )
      }
      )
  }
  return countedData
}

exports.answer = async () => {
  let getAnsCount = await counter(tutorialData)
  let answerData = await userList(getAnsCount)
  return answerData
}

exports.myAnswer = async userId => {
  const myAnsData = tutorialData
  await table.Answers.findAll({ where: { id: userId } })
    .then(results => {
      results.forEach(r => {
        let data = r.get()
        myAnsData[data.exer].answer = data.answer
        myAnsData[data.exer].correct = data.correct
        myAnsData[data.exer].updatedAt = data.updatedAt
      })
    })
  return myAnsData
}
