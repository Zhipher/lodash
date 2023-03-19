// 
// Supprimer un élément d'un tableau facilement
// 

import pull from 'lodash/pull'
import pullAll from 'lodash/pullAll'

const greetings = ['hello', 'hi', 'hey', 'wave', 'hi']
pull(greetings, 'wave', 'hi')
// console.log(greetings)
// [ 'hello', 'hey' ]

// Supprimer des éléments d'un tableau facilement

const greetings2 = ['hello', 'hi', 'hey', 'wave', 'hi']
pullAll(greetings2, ['wave', 'hi'])
// console.log(greetings2)
// [ 'hello', 'hey' ]
