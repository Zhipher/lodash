// 
// Regrouper trois champs de trois tableaux
// 

import zip from 'lodash/zip'

const animals = ['duck', 'cat', 'horse']
const sizes = ['small', 'small', 'tall']
const weight = ['less', 'more', 'more']

const groupedAnimals = zip(animals, sizes, weight)
console.log(groupedAnimals)

/**
[
    [ 'duck', 'small', 'less' ],
    [ 'cat', 'small', 'more' ],
    [ 'horse', 'tall', 'more' ]
]
 */
