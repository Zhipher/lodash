import _ from 'lodash'

const userIds = [12, 13, 14, 12, 5, 34, 11, 12]
const uniqueUserIds = _.uniq(userIds)
console.log(uniqueUserIds)
// [ 12, 13, 14, 5, 34, 11 ]

const users = [
  { id: 10, name: 'Phil', age: 32 },
  { id: 8, name: 'Jason', age: 44 },
  { id: 11, name: 'Rye', age: 28 },
  { id: 10, name: 'Phil', age: 32 }
]

const uniqueUsers = _.uniqBy(users, 'id')
console.log(uniqueUsers)
/*
[
  { id: 10, name: 'Phil', age: 32 },
  { id: 8, name: 'Jason', age: 44 },
  { id: 11, name: 'Rye', age: 28 }
]
*/
