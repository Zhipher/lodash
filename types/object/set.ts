// 
// Modifier un objet ou ajouter une propriété d'un objet
// 

import set from 'lodash/set'

const user = {active: true, age: 22 }

const res = set(user, 'user.firstname', 'Olivier')
const res2 = set(user, 'firstname', 'Olivier')
const res3 = set(user, 'user.0.firstname', 'Olivier')

console.log(res)
console.log(res2)
console.log(res3)