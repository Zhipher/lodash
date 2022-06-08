// 
// Ajouter quelque chose avant la chaîne
// 

import padStart from 'lodash/padStart'

let demo = '1'

// Rajoute le nombre de 0 avant
demo = padStart(demo, 6, '0')
console.log(demo)
// demo => 000001



