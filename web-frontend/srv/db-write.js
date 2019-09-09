'use strict'
const table = require('./table')
const exercise = table.exercise

const answer = async (obj, exer) => {
  await table.Answers.findOne({ where: { id: obj.id, exer: exer } })
    .then(result => {
      const data = result.get()
      // 初回時に ans: 1
      if (data.ans === 0) {
        table.Answers.update(
          { answer: 1 },
          { where: { id: obj.id, exer: exer } })
      }
      // db の correct が 0 かつ、解答の correct が 1 だった場合に記録
      if (data.correct === 0 && obj.correct === 1) {
        table.Answers.update(
          { correct: obj.correct },
          { where: { id: obj.id, exer: exer } })
      }
    }
    )
}

exports.createUser = async obj => {
  console.log('ユーザー登録: ' + obj.id + ': ' + obj.name)

  for (let exer of exercise) {
    await table.Answers.findOrCreate({
      where: { id: obj.id, exer: exer },
      defaults: {
        name: obj.name,
        answer: 0,
        correct: 0
      }
    })
  }
}

exports.create_repository = async obj => {
  await answer(obj, exercise[0])
}

exports.git_commit = async obj => {
  await answer(obj, exercise[1])
}

exports.git_branch = async obj => {
  await answer(obj, exercise[2])
}

exports.git_merge = async obj => {
  await answer(obj, exercise[3])
}
