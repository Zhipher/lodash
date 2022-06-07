// 
// Savoir la taille d'un objet
// 

import _ from 'lodash'

const users = [
    { user: 'fred', age: 40, active: false },
    { user: 'barney', age: 36, active: true },
    { user: 'pebbles', age: 1, active: true },
]

const user = users[0]

// Only JS
const objectSize2 = Object.keys(user).length

// With Lodash
const objectSize = _.size(user)


console.log(objectSize)
console.log(objectSize2)