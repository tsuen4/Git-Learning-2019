'use strict'

const path = require('path')
const Sequelize = require('sequelize')
export const sequelize = new Sequelize(
  'database', '', '',
  {
    dialect: 'sqlite',
    storage: path.join(__dirname, '../db/exer.sqlite3')
  }
)

// 課題識別用の配列
export const exercise = ['create_repository', 'commit', 'branch', 'merge']

export const Answers = sequelize.define('answers',
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
