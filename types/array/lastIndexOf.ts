// 
// Balayer un tableau dans le sens inverse
// 

import lastIndexOf from 'lodash/lastIndexOf'

const integers = [2, 4, 1, 6, -1, 10, 3, -1, 7]
const index = lastIndexOf(integers, -1)
console.log(index) // 7
