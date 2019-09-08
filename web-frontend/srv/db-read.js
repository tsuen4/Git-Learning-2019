'use strict'
const table = require('./table')
const countData = {
  CreateRepository: {
    name: 'リポジトリの作成',
    exer: [
      { id: 1, name: 'リポジトリを作成できたか', answer: 0, correct: 0 }
    ]
  },
  GitCommit: {
    name: '変更内容の記録',
    exer: [
      { id: 1, name: 'コミットできたか', answer: 0, correct: 0 }
    ]
  },
  GitBranch: {
    name: 'ブランチによる分岐と統合',
    exer: [
      { id: 1, name: 'ブランチを切れたか', answer: 0, correct: 0 },
      { id: 2, name: 'マージできたか', answer: 0, correct: 0 }
    ]
  }
}

exports.Counter = async () => {
  // CreateRepository
  await table.CreateRepository.count({ where: { 'ans': 1 } })
    .then(c => { countData.CreateRepository.exer[0].answer = c })
  await table.CreateRepository.count({ where: { 'create_repository': 1 } })
    .then(c => { countData.CreateRepository.exer[0].correct = c })

  // GitCommit
  await table.GitCommit.count({ where: { 'ans': 1 } })
    .then(c => { countData.GitCommit.exer[0].answer = c })
  await table.GitCommit.count({ where: { 'commited': 1 } })
    .then(c => { countData.GitCommit.exer[0].correct = c })

  // GitBranch
  await table.GitBranch.count({ where: { 'ans': 1 } })
    .then(c => {
      countData.GitBranch.exer[0].answer = c
      countData.GitBranch.exer[1].answer = c
    })
  await table.GitBranch.count({ where: { 'branch': 1 } })
    .then(c => { countData.GitBranch.exer[0].correct = c })
  await table.GitBranch.count({ where: { 'merge': 1 } })
    .then(c => { countData.GitBranch.exer[1].correct = c })

  console.log(countData)
  return countData
}
