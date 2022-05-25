// Supprimer un élément d'un tableau facilement

import _ from 'lodash'

const greetings = ['hello', 'hi', 'hey', 'wave', 'hi']
_.pull(greetings, 'wave', 'hi')
console.log(greetings)
// [ 'hello', 'hey' ]

// Supprimer des éléments d'un tableau facilement

const greetings2 = ['hello', 'hi', 'hey', 'wave', 'hi']
_.pullAll(greetings2, ['wave', 'hi'])
console.log(greetings2)
// [ 'hello', 'hey' ]
