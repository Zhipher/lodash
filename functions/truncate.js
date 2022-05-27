import _ from 'lodash'

const res = _.truncate('hi-diddly-ho there, neighborino')

console.log(res)

const res2 = _.truncate('hi-diddly-ho there, neighborino', {
  length: 24,
  separator: ' '
})

console.log(res2)

const res3 = _.truncate('hi-diddly-ho there, neighborino', {
  length: 24,
  separator: /,? +/
})

console.log(res3)

const res4 = _.truncate('hi-diddly-ho there, neighborino', {
  omission: ' [...]'
})

console.log(res4)