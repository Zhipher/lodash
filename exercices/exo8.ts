// 
// Changer le nom des personnes par {firstname: 'string', lastname: 'string'}
// 

// TODO

import unset from 'lodash/unset'
import set from 'lodash/set'
import forEach from 'lodash/forEach'
import updateWith from 'lodash/updateWith'

import { adults } from './persons'

const identicNames = forEach(adults, (adult) => {
    unset(adult, adult.firstname)
    unset(adult, adult.lastname)
    set(adult, 'first', 'string')
    set(adult, 'last', 'string')
})

console.log(identicNames)