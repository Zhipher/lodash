// 
// Transforme une chaîne donnée en url conventionnelle
// 

import kebabCase from 'lodash/kebabCase'

let demo = 'Je suis une URL intéressante'

demo = kebabCase(demo)

console.log(demo)

// demo => olivier_mayeur

