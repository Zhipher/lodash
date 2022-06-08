import filter from 'lodash/filter'

interface IPerson {
	firstName: string,
	lastName: string,
	age: number,
	skills: ['run', 'jump', 'swim', 'dance'],
	gender: string,
	married: boolean,
}

interface IChildren {
    childName: IPerson,
}

interface Adult extends IPerson {
    children: Array<IChildren>
}

const children = [
    { firstname: 'Thomas', lastname: 'Farotale', age: 31, skills: ['jump', 'dance'], gender: 'male', married: false },
    { firstname: 'Gaël', lastname: 'Baritu', age: 5, skills: ['run', 'jump', 'swim', 'dance'], gender: 'male', married: false },
    { firstname: 'Ludovic', lastname: 'Asteriz', age: 5, skills: ['run', 'swim', 'dance'], gender: 'male', married: false },
    { firstname: 'Marie', lastname: 'Asteriz', age: 7, skills: ['swim'], gender: 'female', married: false },
    { firstname: 'Régine', lastname: 'Marino', age: 7, skills: ['dance'], gender: 'female', married: false },
]

const adults = [
    { 
        firstname: 'Olivier', 
        lastname: 'Marino', 
        age: 29, 
        skills: ['run', 'jump', 'dance'], 
        gender: 'male', 
        married: false, 
        children: filter(children, { lastname: 'Marino'}) 
    },
    { 
        firstname: 'Julie', 
        lastname: 'Asteriz', 
        age: 22, 
        skills: ['run', 'jump', 'swim', 'dance'], 
        gender: 'female', 
        married: true, 
        children: filter(children, { lastname: 'Asteriz'}) 
    },
    { 
        firstname: 'Grégoire', 
        lastname: 'Farotale', 
        age: 54, 
        skills: ['run', 'jump', 'swim', 'dance'], 
        gender: 'male', 
        married: true, 
        children: filter(children, { lastname: 'Farotale'}) 
    },
    { firstname: 'Marthe', lastname: 'Lolilo', age: 64, skills: ['run', 'jump', 'swim', 'dance'], gender: 'female', married: true, children: filter(children, { lastname: 'Lolilo'}) },
    { firstname: 'Louis', lastname: 'Lolilo', age: 69, skills: ['run'], gender: 'male', married: true, children: filter(children, { lastname: 'Lolilo'}) },
]


export default adults