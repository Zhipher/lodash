// 
// Filtrer par âge inférieur à 30 ans et possède les compétences « courir » et « nager »
// 

import filter from 'lodash/filter'
import { adults } from './persons'

const ageUnderThirtyandRunSwim = filter(adults, (adult) => {
    // Avec fonctions JS
    return adult.age < 30 && adult.skills.includes('run') && adult.skills.includes('swim')
})
// voir avec some

console.log(ageUnderThirtyandRunSwim)