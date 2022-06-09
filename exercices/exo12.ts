// 
// Exécuter une fonction qui s'exécutera dans 1 seconde
// 

import debounce from 'lodash/debounce'
import throttle from 'lodash/throttle'

const doSomething = () => {
    console.log('Une execution dans une seconde')
}

const doSomethingElse = () => {
    console.log('Une autre exécution dans deux secondes')
}

const exec = debounce(doSomething, 1000)
const exec2 = debounce(doSomethingElse, 2000)

console.log('1')
exec()
console.log('2')
exec2()