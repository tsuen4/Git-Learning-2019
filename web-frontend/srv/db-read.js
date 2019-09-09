'use strict'
const table = require('./table')
const exercise = table.exercise
const exerName = ['リポジトリの作成', '変更内容の記録', 'ブランチによる分岐と統合']

// キーはテーブル名と同じに
const answerData = {
  create_repository: {
    name: exerName[0],
    exer: 'リポジトリを作成できたか',
    answer: 0,
    correct: 0,
    user: []
  },
  commit: {
    name: exerName[1],
    exer: 'コミットできたか',
    answer: 0,
    correct: 0,
    user: []
  },
  branch: {
    name: exerName[2],
    exer: 'ブランチを切れたか',
    answer: 0,
    correct: 0,
    user: []
  },
  merge: {
    name: exerName[2],
    exer: 'マージできたか',
    answer: 0,
    correct: 0,
    user: []
  }
}

const counter = async () => {
  await table.Answers.count({ where: { 'answer': 1 }, group: ['exer'] })
    .then(count => {
      for (let data of count) {
        answerData[data.exer].answer = data.count
      }
    })
  await table.Answers.count({ where: { 'correct': 1 }, group: ['exer'] })
    .then(count => {
      for (let data of count) {
        answerData[data.exer].correct = data.count
      }
    })
}

const userList = async () => {
  for (let exer of exercise) {
    await table.Answers.findAll({ where: { exer: exer }, order: [['id', 'ASC']] })
      .then(results => {
        // 配列を空にして入れ直す
        answerData[exer].user = []
        results.forEach(r => {
          answerData[exer].user.push(r.get())
        }
        )
      }
      )
  }
}

exports.answer = async () => {
  await counter()
  await userList()
  return answerData
}
