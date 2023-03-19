//
// Remplacer les espaces par des underscores
// 

import snakeCase from 'lodash/snakeCase'

let demo = 'olivier mayeur'

demo = snakeCase(demo)

console.log(demo)

// demo => olivier_mayeur

