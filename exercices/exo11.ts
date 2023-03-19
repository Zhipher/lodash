// 
// Exécuter une fonction une seule fois
// 

import times from 'lodash/times'

const doSomething = () => {
    console.log('Une execution une seule fois')
}

times(1, doSomething)