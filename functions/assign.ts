// Assigne une ou plusieurs propriétés d’un objet à un objet source

import _ from 'lodash'

interface Foo {
    a: string;
}

interface Bar {
    b: number;
    c: string;
}

interface Result {
    a: string;
    b: number;
    c: string;
}

export const foo: Foo = { a: "a property" };
export const bar: Bar = { b: 4, c: "an other property" }
export const result: Result = _.assign({ a: "an old property" }, foo, bar);
// result => { a: 'a property', b: 4, c: 'an other property' }
