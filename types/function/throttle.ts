// 
// Appelle une fonction tous les n secondes
// n = 1000 => 1s
// 

import throttle from 'lodash/throttle'

const doSomething = () => {
    console.log('Une execution dans une seconde')
}

console.log('beginning')

const exec = throttle(doSomething, 2000)

console.log('1')
exec()
console.log('2')
console.log('3')
exec()
console.log('4')
console.log('5')