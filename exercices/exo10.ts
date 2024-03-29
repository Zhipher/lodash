// 
// Tableau de tous les ages des enfants
// 

import map from 'lodash/map'

import { children } from './persons'

const ages = map(children, ({ childName }) => childName.age)

console.log(ages)