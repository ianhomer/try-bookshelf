const bookshelf = require('./bookshelf')

const Group = bookshelf.model('Group', {
  tableName: 'group',
  users() {
    return this.belongsToMany('User')
  }
})

module.exports = Group