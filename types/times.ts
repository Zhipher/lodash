// 
// exécuter un fonction n fois
// 

import times from 'lodash/times'

times(42, () => {
  console.log('execution')
})

console.log(times(4))
