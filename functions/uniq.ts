import uniq from 'lodash/uniq'
import uniqBy from 'lodash/uniqBy'

const userIds = [12, 13, 14, 12, 5, 34, 11, 12]
const uniqueUserIds = uniq(userIds)
console.log(uniqueUserIds)
// [ 12, 13, 14, 5, 34, 11 ]

const users = [
  { id: 10, name: 'Phil', age: 32 },
  { id: 8, name: 'Jason', age: 44 },
  { id: 11, name: 'Rye', age: 28 },
  { id: 10, name: 'Phil', age: 32 }
]

const uniqueUsers = uniqBy(users, 'id')
console.log(uniqueUsers)
/*
[
  { id: 10, name: 'Phil', age: 32 },
  { id: 8, name: 'Jason', age: 44 },
  { id: 11, name: 'Rye', age: 28 }
]
*/
