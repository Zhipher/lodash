// 
// Fusionner en un tableau les enfants et les parents
// 

import concat from 'lodash/concat'
import find from 'lodash/find'
import flatten from 'lodash/flatten'

import { adults, children, IAdult, IChildren, IPerson } from './persons'

// Méthode 1 : avec deux tableaux différents

const childrenPersons = children.map( ({ childName }) => childName)

const childrenAndAdults: Array<IAdult|IPerson> = concat(adults, childrenPersons)

console.log(childrenAndAdults)
