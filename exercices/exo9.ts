// 
// Tableau de tous les enfants
// 

import map from 'lodash/map'
import flatten from 'lodash/flatten'
import uniq from 'lodash/uniq'

import { adults } from './persons'

const children = map(adults, (adult) =>
    flatten(adult.children)
)

const childrenArray = flatten(children)

const realChildren = uniq(childrenArray)

console.log(realChildren)