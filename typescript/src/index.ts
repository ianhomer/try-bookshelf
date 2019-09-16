console.log("Trying Bookshelf with Typescript")

import User from './entity/User'
import Group from './entity/Group'

User.forge({'name':'my-name'})
    .save()
    .then(user => {
        Group.forge({'name':'my-group'})
            .save()
            .then(group => {
                console.log(`Saved group : ${JSON.stringify(user)}`)
            })
            .catch(err => console.log(err))
        console.log('saved user')
    })
    .catch(err => console.log(err))