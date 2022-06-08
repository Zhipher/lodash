// 
// Filtrer par les personnes qui ont des filles et ne sont pas mariées
// 

import filter from 'lodash/filter'
import get from 'lodash/get'
import flatten from 'lodash/flatten'
import some from 'lodash/some'

import { adults, children, IChildren } from './persons'

// Vérifier s'il existe une fille parmi les enfants

const girlChildren = (children: Array<IChildren>) => 
    some(children, { childName: { gender: 'female'} })

const badPersons = filter(adults, (adult) => {
    
    const children: any = adult.children
    
    return !adult.married 
        && some(children, { childName: { gender: 'female'} })
})

// console.log(girlChildren(children))
console.log(badPersons)