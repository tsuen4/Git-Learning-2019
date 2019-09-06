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

exports.git_commit = obj => {
  // console.log('==db==\n' + obj.id + '\n' + obj.commited + '\n======')

  // 回答状況登録
  table.GitCommit.findOne({ where: { id: obj.id } })
    .then(result => {
      const data = result.get()
      // console.log(data)
      // 初回時に ans: 1 にする
      if (data.ans === 0) { table.GitCommit.update({ ans: 1 }, { where: { id: obj.id } }) }
      // db の commited が 0 だった場合のみ解答を記録
      if (data.commited === 0) {
        table.GitCommit.update(
          { commited: obj.commited },
          { where: { id: obj.id } }
        )
      }
    }
    )
}
