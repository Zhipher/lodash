// 
// Boucle pour faire un traitement sur une donnée d'un tableau
// 

import _ from 'lodash'

const users = [
    { user: 'fred', age: 40, active: false },
    { user: 'barney', age: 36, active: true },
    { user: 'pebbles', age: 1, active: true },
]

let actives = _.forEach(users[0], (value, key) => {
    console.log (`${key} => ${value}`)
})
// user => fred
// age => 40
// active => false

console.log(actives)