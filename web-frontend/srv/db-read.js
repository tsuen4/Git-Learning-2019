'use strict'
const table = require('./table')
const exerName = ['リポジトリの作成', '変更内容の記録', 'ブランチによる分岐と統合']
const answerData = {
  CreateRepository: {
    name: exerName[0],
    exer: { id: 1, name: 'リポジトリを作成できたか', answer: 0, correct: 0, user: [] }
  },
  GitCommit: {
    name: exerName[1],
    exer: { id: 1, name: 'コミットできたか', answer: 0, correct: 0, user: [] }
  },
  GitBranch: {
    name: exerName[2],
    exer: { id: 1, name: 'ブランチを切れたか', answer: 0, correct: 0, user: [] }
  },
  GitMerge: {
    name: exerName[2],
    exer: { id: 1, name: 'マージできたか', answer: 0, correct: 0, user: [] }

  }
}

const counter = async () => {
  // CreateRepository
  await table.CreateRepository.count({ where: { 'ans': 1 } })
    .then(c => { answerData.CreateRepository.exer.answer = c })
  await table.CreateRepository.count({ where: { 'correct': 1 } })
    .then(c => { answerData.CreateRepository.exer.correct = c })

  // GitCommit
  await table.GitCommit.count({ where: { 'ans': 1 } })
    .then(c => { answerData.GitCommit.exer.answer = c })
  await table.GitCommit.count({ where: { 'correct': 1 } })
    .then(c => { answerData.GitCommit.exer.correct = c })

  // GitBranch
  await table.GitBranch.count({ where: { 'ans': 1 } })
    .then(c => { answerData.GitBranch.exer.answer = c })
  await table.GitBranch.count({ where: { 'correct': 1 } })
    .then(c => { answerData.GitBranch.exer.correct = c })
  // GitMetge
  await table.GitMerge.count({ where: { 'ans': 1 } })
    .then(c => { answerData.GitMerge.exer.answer = c })
  await table.GitMerge.count({ where: { 'correct': 1 } })
    .then(c => { answerData.GitMerge.exer.correct = c })

  // console.log(answerData)
}

const userList = async () => {
  // 配列を空にして入れ直す
  await table.CreateRepository.findAll({ order: [['id', 'ASC']] })
    .then(results => {
      answerData.CreateRepository.exer.user = []
      results.forEach(r => answerData.CreateRepository.exer.user.push(r.get()))
    }
    )
  await table.GitCommit.findAll({ order: [['id', 'ASC']] })
    .then(results => {
      answerData.GitCommit.exer.user = []
      results.forEach(r => answerData.GitCommit.exer.user.push(r.get()))
    }
    )
  await table.GitBranch.findAll({ order: [['id', 'ASC']] })
    .then(results => {
      answerData.GitBranch.exer.user = []
      results.forEach(r => answerData.GitBranch.exer.user.push(r.get()))
    }
    )
  await table.GitMerge.findAll({ order: [['id', 'ASC']] })
    .then(results => {
      answerData.GitMerge.exer.user = []
      results.forEach(r => answerData.GitMerge.exer.user.push(r.get()))
    }
    )
}

exports.answer = async () => {
  await counter()
  await userList()
  return answerData
}
