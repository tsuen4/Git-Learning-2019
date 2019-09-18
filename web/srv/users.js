'use strict'

const users = [
  {
    email: 'ht17a045@oecu.jp',
    role: 'admin'
  },
  {
    email: 'hisamatu@osakac.ac.jp',
    role: 'admin'
  }
]

exports.isAdmin = (id) => {
  for (let user of users) {
    if (id === user.email && user.role === 'admin') {
      return true
    }
  }
  return false
}
