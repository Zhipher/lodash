// 
// Retourne le premier élément correspondant sous forme d'élément'
// 

import _ from 'lodash'

const users = [
    { user: 'fred', age: 40, active: false },
    { user: 'barney', age: 36, active: true },
    { user: 'pebbles', age: 1, active: true },
]

const actives = _.find(users, { active: false })
// actives => { user: 'fred', age: 40, active }

console.log(actives)