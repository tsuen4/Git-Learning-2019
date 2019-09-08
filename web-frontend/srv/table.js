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
    correct: Sequelize.INTEGER
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
    correct: Sequelize.INTEGER
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
    correct: Sequelize.INTEGER
  },
  { timestamps: false }
)

export const GitMerge = sequelize.define('git_merges',
  {
    id: {
      type: Sequelize.TEXT,
      primaryKey: true
    },
    name: Sequelize.TEXT,
    ans: Sequelize.INTEGER,
    correct: Sequelize.INTEGER
  },
  { timestamps: false }
)
