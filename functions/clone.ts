// 
// Cloner un objet
// 

import _ from 'lodash'

interface IUser {
    user: string,
    age: number,
    active: boolean,
}

const users: Array<IUser> = [
    { user: 'fred', age: 40, active: false },
    { user: 'barney', age: 36, active: true },
    { user: 'pebbles', age: 1, active: true },
]

const user: IUser = users[0]
const user2: IUser = _.clone(user)

user2.age = user2.age * 3

console.log(user2)
console.log(user) // utilisateur non altéré