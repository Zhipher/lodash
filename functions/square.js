import _ from 'lodash'

const square = (n) => n * n

const addSquare = _.flow([ _.add, square ])
const res = addSquare(1, 4)

console.log(res)
// => 9