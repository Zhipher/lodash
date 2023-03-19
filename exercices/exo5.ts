// 
// Filtrer par personnes mariées et qui sautent
// 

import filter from 'lodash/filter'
import includes from 'lodash/includes'

import { adults, children, IChildren } from './persons'

const marriedAndJump = filter(adults, (adult) => {
    const { skills, married } = adult
    return married && includes(skills, 'jump')
})

console.log(marriedAndJump)