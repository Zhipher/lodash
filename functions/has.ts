// 
// Vérifier si le chemin est une propriété directe de l'objet
// 

import has from 'lodash/has'

interface IUser {
    user: { firstname: string },
    active: boolean,
    age: number,
}

const user: IUser = { user: { firstname: 'demo' }, active: true, age: 22 }

if( has(user, 'user.firstname') && user.user.firstname === 'demo' ) {
    console.log('ok')
} 

