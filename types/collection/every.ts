// 
// Savoir si l'élément se trouve dans toutes les occurences de la collection
// 

// Différent de some

import every from 'lodash/every'

const persons = [
    {
        firstname: 'louis', 
        lastname: 'jules',
        age: 34, 
    },
    {
        firstname: 'maryse', 
        lastname: 'polinom',
        age: 34, 
    },
]

const res = every(persons, { firstname: 'louis' })

console.log(res)