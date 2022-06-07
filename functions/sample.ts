// 
// Choisir de façon aléatoire un élément du tableau
// 

import _ from 'lodash'

const users = [
    { user: 'fred', age: 40, active: false },
    { user: 'barney', age: 36, active: true },
    { user: 'pebbles', age: 1, active: true },
]

Array(10).map( () => {
    const userAleatoireChoisi = _.sample(users)
    console.log(userAleatoireChoisi)
})

const userAleaChoiced = _.sample(users)
// par exemple : { user: 'fred', age: 40, active: false }

console.log(userAleaChoiced)

const twoUsersChoiced = _.sampleSize(users, 2)
// par exemple : [
//     { user: 'pebbles', age: 1, active: true },
//     { user: 'fred', age: 40, active: false }
// ]

console.log(twoUsersChoiced)