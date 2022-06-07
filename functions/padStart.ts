import _ from 'lodash'

let demo = '1'

// Rajoute le nombre de 0 avant
demo = _.padStart(demo, 6, '0')
console.log(demo)
// demo => 000001



