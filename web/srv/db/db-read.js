'use strict'
const table = require('./table')
const exercise = table.exercise

const tutorialName = [
  'リポジトリの作成',
  '変更内容の記録',
  'ブランチによる分岐と統合',
  'コミットのやり直し',
  '作業の取り消し'
]
const exerName = [
  'リポジトリを作成できたか',
  'コミットできたか',
  'ブランチを切れたか',
  'マージできたか',
  '直前のコミットメッセージを変更できたか',
  '直前のコミットにファイルを追加できたか',
  '作業の取り消しができたか'
]

// キーはテーブル名と同じに
const answerData = {
  create_repository: {
    name: tutorialName[0],
    exer: exerName[0],
    answer: 0,
    correct: 0,
    user: []
  },
  commit: {
    name: tutorialName[1],
    exer: exerName[1],
    answer: 0,
    correct: 0,
    user: []
  },
  branch: {
    name: tutorialName[2],
    exer: exerName[2],
    answer: 0,
    correct: 0,
    user: []
  },
  merge: {
    name: tutorialName[2],
    exer: exerName[3],
    answer: 0,
    correct: 0,
    user: []
  },
  amend: {
    name: tutorialName[3],
    exer: exerName[4],
    answer: 0,
    correct: 0,
    user: []
  },
  no_edit: {
    name: tutorialName[3],
    exer: exerName[5],
    answer: 0,
    correct: 0,
    user: []
  },
  checkout: {
    name: tutorialName[4],
    exer: exerName[6],
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

exports.myAnswer = async userId => {
  const myAnsData = {
    create_repository: {
      name: tutorialName[0],
      exer: exerName[0],
      answer: 0,
      correct: 0,
    },
    commit: {
      name: tutorialName[1],
      exer: exerName[1],
      answer: 0,
      correct: 0,
    },
    branch: {
      name: tutorialName[2],
      exer: exerName[2],
      answer: 0,
      correct: 0,
    },
    merge: {
      name: tutorialName[2],
      exer: exerName[3],
      answer: 0,
      correct: 0,
    },
    amend: {
      name: tutorialName[3],
      exer: exerName[4],
      answer: 0,
      correct: 0,
    },
    no_edit: {
      name: tutorialName[3],
      exer: exerName[5],
      answer: 0,
      correct: 0,
    },
    checkout: {
      name: tutorialName[4],
      exer: exerName[6],
      answer: 0,
      correct: 0,
    }
  }
  await table.Answers.findAll({ where: { id: userId } })
    .then(results => {
      results.forEach(r => {
        let data = r.get()
        myAnsData[data.exer].answer = data.answer
        myAnsData[data.exer].correct = data.correct
      })
    })
  return myAnsData
}
