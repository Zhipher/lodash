// Fusionner deux tableaux

import concat from 'lodash/concat'

const tab = [ 1, 2, 3 ]
const tab2 = [ 4, 5 ]

const res = concat(tab, tab2)
// res => [ 1, 2, 3, 4, 5 ]

console.log(res)

// Sans Lodash

const res2 = [ ...tab, ...tab2 ]

console.log(res2)