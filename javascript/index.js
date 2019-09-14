const bookshelf = require('./bookshelf')
const User = require('./User')
const Group = require('./Group')

console.log("Tying bookshelf")

User.forge({'name':'my-name'})
    .save()
    .then(user => {
        console.log(`Saved user : ${JSON.stringify(user)}`)
        Group.forge({'name':'my-group'})
            .save()
            .then(group => {
                console.log(`Saved group : ${JSON.stringify(user)}`)
                try {
                    console.log(`Attaching group`)
                    user.groups().attach(group)
                        .then(collection => `Saved relation ${collection}`)
                        .catch(err => console.log(err))
                    console.log(`Attached group`)
                } catch (e) {
                    console.log(e)
                }
            })
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err))


console.log("Finished")

