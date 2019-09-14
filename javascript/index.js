const bookshelf = require('./bookshelf')
const User = require('./User')

console.log("Tying bookshelf")

User.forge({'name':'my-name'}).save()
    .then(user => console.log(`Saved : ${JSON.stringify(user)}`))
    .catch(err => console.log(err))

console.log("Finished")


