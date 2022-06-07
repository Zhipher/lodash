// 
// 
// 

import _ from 'lodash'

const users = [
    { user: 'fred', age: 40, active: false },
    { user: 'barney', age: 36, active: true },
    { user: 'pebbles', age: 1, active: true },
]

const userGrouped = _.groupBy(users, (user) => {
    return user.user.substr(0, 1)
})



console.log(userGrouped)