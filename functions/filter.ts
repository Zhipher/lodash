// 
// Retourne les éléments correspondants sous forme de tableau
// 

import _ from 'lodash'

const tab = [ 1, 2, 3]

const res = _.filter(tab, (element) => element > 1)
// res => [ 2, 3 ]

console.log(res)

const users = [
    { user: 'fred', age: 40, active: false },
    { user: 'barney', age: 36, active: true },
    { user: 'pebbles', age: 1, active: true },
]

const actives = _.filter(users, { active: false })
// actives => [ { user: 'fred', age: 40, active } ]

console.log(actives)