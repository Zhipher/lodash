// 
// Transforme une chaîne donnée en url conventionnelle
// 

import _ from 'lodash'

let demo = 'Je suis une URL intéressante'

demo = _.kebabCase(demo)

console.log(demo)

// demo => olivier_mayeur

