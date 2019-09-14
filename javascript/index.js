const bookshelf = require('./bookshelf')
const User = require('./User')

console.log("Tying bookshelf")

async function save() {
    let val = await User.forge({'name':'my-name'}).save()
    console.log(val.toJSON())
}

save()


