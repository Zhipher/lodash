// 
// Retourne les éléments correspondants sous forme de tableau
// 

import filter from 'lodash/filter'

const tab = [ 1, 2, 3]

const res = filter(tab, (element) => element > 1)
// res => [ 2, 3 ]

console.log(res)

const users = [
    { user: 'fred', age: 40, active: false },
    { user: 'barney', age: 36, active: true },
    { user: 'pebbles', age: 1, active: true },
]

const actives = filter(users, { active: false })
// actives => [ { user: 'fred', age: 40, active } ]

console.log(actives)