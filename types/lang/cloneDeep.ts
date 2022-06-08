// 
// Cloner un objet
// 

import cloneDeep from 'lodash/cloneDeep'
// import Object from '../interfaces/cloneDeep'

export const object1 = {
  firstname: 'Olivier',
  lastname: 'Mayeur',
  age: 29,
  city: 'Rennes'
}

export const object2 = cloneDeep(object1)

export default { object1, object2 }
