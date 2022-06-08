import filter from 'lodash/filter'

export interface IPerson {
	firstname: string,
	lastname: string,
	age: number,
	skills: Array<string>,
	gender: string,
	married: boolean,
}

export interface IChildren {
    childName: IPerson,
}

export interface IAdult extends IPerson {
    children?: Array<IChildren>
}

export const children: Array<IChildren> = [
    {
        childName: { firstname: 'Thomas', lastname: 'Farotale', age: 31, skills: ['jump', 'dance'], gender: 'male', married: false }
    },
    {
        childName: { firstname: 'Gaël', lastname: 'Baritu', age: 5, skills: ['swim', 'dance'], gender: 'male', married: false }
    },
    {
        childName: { firstname: 'Ludovic', lastname: 'Asteriz', age: 4, skills: ['run', 'swim', 'dance'], gender: 'male', married: false }
    },
    {
        childName: { firstname: 'Marie', lastname: 'Asteriz', age: 7, skills: ['swim'], gender: 'female', married: false }
    },
    {
        childName: { firstname: 'Régine', lastname: 'Marino', age: 6, skills: ['dance'], gender: 'female', married: false }
    },
    {
        childName: { firstname: 'Julia', lastname: 'Lolilo', age: 40, skills: ['run', 'dance'], gender: 'female', married: true }
    },
]

export const adults: Array<IAdult> = [
    { 
        firstname: 'Olivier', 
        lastname: 'Marino', 
        age: 29, 
        skills: ['run', 'jump', 'dance'], 
        gender: 'male', 
        married: false, 
        children: filter(children, (c) => c.childName.lastname === 'Marino' ) 
    },
    { 
        firstname: 'Julie', 
        lastname: 'Asteriz', 
        age: 22, 
        skills: ['run', 'jump', 'swim', 'dance'], 
        gender: 'female', 
        married: true, 
        children: filter(children, (c) => c.childName.lastname === 'Asteriz' ) 
    },
    { 
        firstname: 'Grégoire', 
        lastname: 'Farotale', 
        age: 54, 
        skills: ['run', 'jump', 'swim', 'dance'], 
        gender: 'male', 
        married: true, 
        children: filter(children, (c) => c.childName.lastname === 'Farotale' )  
    },
    { 
        firstname: 'Marthe', 
        lastname: 'Lolilo', 
        age: 64, 
        skills: ['run', 'jump', 'swim', 'dance'], 
        gender: 'female', 
        married: true, 
        children: filter(children, (c) => c.childName.lastname === 'Lolilo' ) 
    },
    { 
        firstname: 'Louis', 
        lastname: 'Lolilo', 
        age: 69, 
        skills: ['run'], 
        gender: 'male', 
        married: true, 
        children: filter(children, (c) => c.childName.lastname === 'Lolilo' ) 
    },
]