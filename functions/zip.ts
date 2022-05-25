// Regrouper trois champs de trois tableaux

import _, { size } from 'lodash'

const animals = ['duck', 'cat', 'horse']
const sizes = ['small', 'small', 'tall']
const weight = ['less', 'more', 'more']

const groupedAnimals = _.zip(animals, sizes, weight)
console.log(groupedAnimals)

/**
[
    [ 'duck', 'small', 'less' ],
    [ 'cat', 'small', 'more' ],
    [ 'horse', 'tall', 'more' ]
]
 */
