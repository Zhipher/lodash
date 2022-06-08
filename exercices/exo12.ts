// 
// Tableau de tous les enfants
// 

import times from 'lodash/times'

const doSomething = () => {
    console.log('Une execution une seule fois')
}

times(1, doSomething)