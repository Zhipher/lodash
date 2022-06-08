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

// console.log(childrenAndAdults) // Résultat

// Méthode 2 : avec le tableau des adultes seulement

const childrenPersons2 = adults.map ((adult) => {
    const childName = adult.children
    return childName
})

const childrenPersonsv2 = flatten(flatten(childrenPersons2))
console.log(childrenPersons2)

const childrenAndAdults2: Array<IAdult|IPerson> = concat(adults, childrenPersons)

// console.log(childrenAndAdults2)