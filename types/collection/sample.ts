// 
// Choisir de façon aléatoire un élément du tableau
// 

import sample from 'lodash/sample'
import sampleSize from 'lodash/sampleSize'

const users = [
    { user: 'fred', age: 40, active: false },
    { user: 'barney', age: 36, active: true },
    { user: 'pebbles', age: 1, active: true },
]

Array(10).map( () => {
    const userAleatoireChoisi = sample(users)
    console.log(userAleatoireChoisi)
})

const userAleaChoiced = sample(users)
// par exemple : { user: 'fred', age: 40, active: false }

console.log(userAleaChoiced)

const twoUsersChoiced = sampleSize(users, 2)
// par exemple : [
//     { user: 'pebbles', age: 1, active: true },
//     { user: 'fred', age: 40, active: false }
// ]

console.log(twoUsersChoiced)