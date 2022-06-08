// 
// Chercher un élement à une position du tableau
// 

import nth from 'lodash/nth'

const nums = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(nth(nums, 3))
console.log(nth(nums, -3))
