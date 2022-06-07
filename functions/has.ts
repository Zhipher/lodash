import _ from 'lodash'

interface IUser {
    user: { firstname: string },
    active: boolean,
    age: number,
}

const user: IUser = { user: { firstname: 'demo' }, active: true, age: 22 }

if( _.has(user, 'user.firstname') && user.user.firstname === 'demo' ) {
    console.log('ok')
} 

