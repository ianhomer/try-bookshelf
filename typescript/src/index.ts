console.log("Trying Bookshelf with Typescript")

import User from './entity/User'
import Group from './entity/Group'

const seed = Math.floor(new Date().getTime() / 1000)

User.forge({'name':'my-name=' + seed})
    .save()
    .then(user => {
        Group.forge({'name':'my-group-' + seed})
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
        console.log('saved user')
    })
    .catch(err => console.log(err))