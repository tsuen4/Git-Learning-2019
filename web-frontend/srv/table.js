'use strict'

const path = require('path')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(
  'database', '', '', {
    dialect: 'sqlite',
    storage: path.join(__dirname, '../db/exer.sqlite3')
  }
)

export const CreateRepository = sequelize.define('create_repositories',
  {
    id: {
      type: Sequelize.TEXT,
      primaryKey: true
    },
    name: Sequelize.TEXT,
    ans: Sequelize.INTEGER,
    create_repository: Sequelize.INTEGER
  },
  { timestamps: false }
)

export const GitCommit = sequelize.define('git_commits',
  {
    id: {
      type: Sequelize.TEXT,
      primaryKey: true
    },
    name: Sequelize.TEXT,
    ans: Sequelize.INTEGER,
    commited: Sequelize.INTEGER
  },
  { timestamps: false }
)

export const GitBranch = sequelize.define('git_branches',
  {
    id: {
      type: Sequelize.TEXT,
      primaryKey: true
    },
    name: Sequelize.TEXT,
    ans: Sequelize.INTEGER,
    branch: Sequelize.INTEGER,
    merge: Sequelize.INTEGER
  },
  { timestamps: false }
)
