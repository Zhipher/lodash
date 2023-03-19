// Savoir si un élément se trouve dans la collection

// Différent de every

import some from 'lodash/some'

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

const res = some(persons, { firstname: 'louis' })

console.log(res)