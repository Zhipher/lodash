// 
// Assigne une ou plusieurs propriétés d’un objet à un objet source
// 

import assign from 'lodash/assign'

interface IFoo {
    a: string;
}

interface IBar {
    b: number;
    c: string;
}

interface IResult {
    a: string;
    b: number;
    c: string;
}

export const foo: IFoo = { a: "a property" };
export const bar: IBar = { b: 4, c: "an other property" }
export const result: IResult = assign({ a: "an old property" }, foo, bar);
// result => { a: 'a property', b: 4, c: 'an other property' }
