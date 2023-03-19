// 
// Changer le nom des personnes par {firstname: 'string', lastname: 'string'}
// 

import forEach from 'lodash/forEach'

import { adults } from './persons'

const identicNames = forEach(adults, (adult) => {
    adult.firstname = 'string'
    adult.lastname = 'string'
})

console.log(identicNames)