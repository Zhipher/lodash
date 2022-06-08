// 
// Transformer un objet en tableau
// 

import values from 'lodash/values'

interface IPerson {
    firstname: string,
    lastname: string,
    age: number,
}

class Person {
    firstname: string
    lastname: string
    age: number

    constructor () {
        this.firstname = 'Jean'
        this.lastname = 'Luc'
        this.age = 33
    }
}

const res = values(new Person)

console.log(res)