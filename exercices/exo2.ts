import filter from 'lodash/filter'
import adults from './adults'

const childSwimOrDance = filter(adults, (adult) => {
    // Avec fonctions JS
    console.log(adult.children)
    // const { skills } = adult.children
    // return adult.children.includes('') && adult.skills.includes('swim')
})
// voir avec some

console.log(childSwimOrDance)