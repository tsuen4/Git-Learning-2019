'use strict'

const path = require('path')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(
  'database', '', '',
  {
    dialect: 'sqlite',
    storage: path.join(__dirname, 'exer.sqlite3')
  }
)

// 課題識別用の配列
const exercise = [
  'create_repository',
  'commit',
  'branch',
  'merge',
  'amend',
  'no_edit',
  'checkout',
  'remote',
  'push'
]

const Answers = sequelize.define('answers',
  {
    id: {
      type: Sequelize.TEXT,
      primaryKey: true
    },
    name: Sequelize.TEXT,
    exer: Sequelize.TEXT,
    answer: Sequelize.INTEGER,
    correct: Sequelize.INTEGER
  },
  { timestamps: false }
)

module.exports = { sequelize, exercise, Answers }
