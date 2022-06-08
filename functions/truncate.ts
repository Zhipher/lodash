import truncate from 'lodash/truncate'

const res = truncate('hi-diddly-ho there, neighborino')

console.log(res)

const res2 = truncate('hi-diddly-ho there, neighborino', {
  length: 24,
  separator: ' '
})

console.log(res2)

const res3 = truncate('hi-diddly-ho there, neighborino', {
  length: 24,
  separator: /,? +/
})

console.log(res3)

const res4 = truncate('hi-diddly-ho there, neighborino', {
  omission: ' [...]'
})

console.log(res4)