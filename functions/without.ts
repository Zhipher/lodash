// 
// Supprimer un élément d'un tableau selon sa valeur
// 

import without from 'lodash/without'

const tab = [ 1, 2, 3]

const res: number[] = without(tab, 2)
// res => [ 1, 3 ]

console.log(res)

const comment = { username: 'Olivier', content: 'Salut les gens'}

const tab2 = [ 1, comment, 3 ]

const res2 = without(tab2, comment)
//  res2 => [ 1, 3 ]

console.log(res2)