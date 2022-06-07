//
// Remplacer les espaces par des underscores
// 

import _ from 'lodash'

let demo = 'olivier mayeur'

demo = _.snakeCase(demo)

console.log(demo)

// demo => olivier_mayeur

