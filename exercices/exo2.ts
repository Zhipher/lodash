// 
// Filtrer par enfants qui savent nager ou danser, et trier par sexe et age
// 
// A modifier suite aux modifs de type
// 

import orderBy from 'lodash/orderBy'
import filter from 'lodash/filter'

import { adults, children, IChildren, IPerson } from './persons'

const childrenSorted: Array<IChildren> = filter(children, (child) => {
    const { skills } = child.childName
    return skills.includes('swim') || skills.includes('dance')
})

const childrenFiltered: Array<IChildren> = orderBy( childrenSorted, [ 'gender', 'age'], [ 'asc', 'asc'])

console.log(childrenFiltered)