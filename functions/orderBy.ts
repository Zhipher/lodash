// 
// Trier un tableau d'objet selon le/les critère(s) choisi(s) en paramètres
// 

import orderBy from 'lodash/orderBy'

const users = [
    { user: 'fred', age: 40, active: false },
    { user: 'fred', age: 32, active: true },
    { user: 'barney', age: 36, active: true },
    { user: 'pebbles', age: 1, active: true },
]

let actives = orderBy(users, [ 'user', 'age' ], [ 'asc', 'desc' ])
// actives => [
//     { user: 'barney', age: 36, active: true },
//     { user: 'fred', age: 40, active: false },
//     { user: 'pebbles', age: 1, active: true },
// ]

console.log(actives)