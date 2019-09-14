const bookshelf = require('./bookshelf')

const User = bookshelf.model('User', {
  tableName: 'user',
})

module.exports = User