import filter from 'lodash/filter'
import some from 'lodash/some'

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

const adults = [
    { firstname: 'Olivier', lastname: 'Mayeur', age: 29, skills: ['run', 'jump', 'dance'], gender: 'male', married: false },
    { firstname: 'Julie', lastname: 'Asteriz', age: 22, skills: ['run', 'jump', 'swim', 'dance'], gender: 'female', married: true },
    { firstname: 'Grégoire', lastname: 'Farotale', age: 54, skills: ['run', 'jump', 'swim', 'dance'], gender: 'male', married: true },
    { firstname: 'Marthe', lastname: 'Lolilo', age: 64, skills: ['run', 'jump', 'swim', 'dance'], gender: 'female', married: true },
]

const ageUnderThirtyandRunSwim = filter(adults, (adult) => {
    // Avec fonctions JS
    return adult.age < 30 && adult.skills.includes('run') && adult.skills.includes('swim')
})
// voir avec some

console.log(ageUnderThirtyandRunSwim)