import _ from 'lodash'

const tab = [ 1, 2, 3 ]
const tab2 = [ 4, 5 ]

const res = _.concat(tab, tab2)
// res => [ 1, 2, 3, 4, 5 ]

console.log(res)