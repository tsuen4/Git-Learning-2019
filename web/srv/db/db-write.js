'use strict'
const table = require('./table')
const exercise = table.exercise

const answer = async (obj, exer) => {
  await table.Answers.findOne({ where: { id: obj.id, exer: exer } })
    .then(result => {
      const data = result.get()
      // 初回時に ans: 1
      if (data.answer === 0) {
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
  console.log('ユーザー登録: ' + obj.id + ' - ' + obj.name)

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

exports.regAnswer = async (obj, exername) => {
  switch (exername) {
    case 'create-repository':
      await answer(obj, exercise[0])
      break
    case 'commit':
      await answer(obj, exercise[1])
      break
    case 'branch':
      await answer(obj, exercise[2])
      break
    case 'merge':
      await answer(obj, exercise[3])
      break
    case 'amend':
      await answer(obj, exercise[4])
      break
    case 'no_edit':
      await answer(obj, exercise[5])
      break
    case 'checkout':
      await answer(obj, exercise[6])
      break
    case 'remote':
      await answer(obj, exercise[7])
      break
    case 'push':
      await answer(obj, exercise[8])
      break
    default:
      console.log('存在しない問題 id です: ' + exername)
      break
  }
}
