'use strict'
const table = require('./table')

exports.createUser = obj => {
  console.log(obj.id + ': ' + obj.name)

  table.CreateRepository.findOrCreate({
    where: { id: obj.id },
    defaults: {
      name: obj.name,
      ans: 0,
      create_repository: 0
    }
  })

  table.GitCommit.findOrCreate({
    where: { id: obj.id },
    defaults: {
      name: obj.name,
      ans: 0,
      commited: 0
    }
  })

  table.GitBranch.findOrCreate({
    where: { id: obj.id },
    defaults: {
      name: obj.name,
      ans: 0,
      branch: 0,
      merge: 0
    }
  })
}

exports.git_commit = async obj => {
  // console.log('==db==\n' + obj.id + '\n' + obj.correct + '\n======')

  // 回答状況登録
  table.GitCommit.findOne({ where: { id: obj.id } })
    .then(result => {
      const data = result.get()
      // console.log(data)
      // 初回時に ans: 1 にする
      if (data.ans === 0) { table.GitCommit.update({ ans: 1 }, { where: { id: obj.id } }) }
      // db の correct が 0 かつ解答の correct が 1 だった場合に記録
      if (data.correct === 0 && obj.correct === 1) {
        table.GitCommit.update(
          { correct: obj.correct },
          { where: { id: obj.id } }
        )
      }
    }
    )
}

exports.git_branch = async obj => {
  // console.log('==db==\n' + obj.id + '\n' + obj.correct + '\n======')

  // 回答状況登録
  await table.GitBranch.findOne({ where: { id: obj.id } })
    .then(result => {
      const data = result.get()
      // 初回時に ans: 1 にする
      if (data.ans === 0) { table.GitBranch.update({ ans: 1 }, { where: { id: obj.id } }) }
      // db の correct が 0 かつ解答の correct が 1 だった場合に記録
      if (data.correct === 0 && obj.correct === 1) {
        table.GitBranch.update(
          { correct: obj.correct },
          { where: { id: obj.id } }
        )
      }
    }
    )
}

exports.git_merge = async obj => {
  // console.log('==db==\n' + obj.id + '\n' + obj.correct + '\n======')

  // 回答状況登録
  await table.GitMerge.findOne({ where: { id: obj.id } })
    .then(result => {
      const data = result.get()
      // 初回時に ans: 1 にする
      if (data.ans === 0) { table.GitMerge.update({ ans: 1 }, { where: { id: obj.id } }) }
      // db の correct が 0 かつ解答の correct が 1 だった場合に記録
      if (data.correct === 0 && obj.correct === 1) {
        table.GitMerge.update(
          { correct: obj.correct },
          { where: { id: obj.id } }
        )
      }
    }
    )
}
