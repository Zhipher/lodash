// 
// Filtrer par enfants qui savent nager ou danser, et trier par sexe et age
// 
// TODO
// 

import orderBy from 'lodash/orderBy'
import filter from 'lodash/filter'

import { adults, children, IPerson } from './persons'

const childrenSorted = filter(children, ({ skills }) => {
    return skills.includes('swim') || skills.includes('dance')
})

const childrenFiltered = orderBy( childrenSorted, [ 'gender', 'age'], [ 'asc', 'asc'])


console.log(childrenFiltered)
// voir avec some

// console.log(childrenSwimOrDance)