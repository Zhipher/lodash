// 
// Filtrer par les personnes qui ont des filles et ne sont pas mariées
// 

import filter from 'lodash/filter'
import some from 'lodash/some'

import { adults, children, IChildren } from './persons'

const badPersons = filter(adults, (adult) => {
    
    const children: any = adult.children
    
    // Savoir si pas marié et a une fille
    return !adult.married 
        && some(children, { childName: { gender: 'female'} })
})

console.log(badPersons)