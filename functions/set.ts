import _ from 'lodash'

const user = {active: true, age: 22 }

const res = _.set(user, 'user.firstname', 'Olivier')
const res2 = _.set(user, 'firstname', 'Olivier')
const res3 = _.set(user, 'user.0.firstname', 'Olivier')

console.log(res)
// console.log(res2)
// console.log(res3)