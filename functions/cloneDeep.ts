// Cloner un objet

import _ from 'lodash'
// import Object from '../interfaces/cloneDeep'

export const object1 = {
    firstname: 'Olivier',
    lastname: 'Mayeur',
    age: 29,
    city: 'Rennes'
}

export const object2 = _.cloneDeep(object1)

export default { object1, object2 }