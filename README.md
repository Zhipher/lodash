# Lodash

## Introduction

But :

- Itérer les tableaux, les objets, & les chaînes
- Manipuler & tester les valeurs
- Créer des fonctions composites
  
## Prérequis

Connaissances de [Typescript](https://www.typescriptlang.org/).

Chaque exemple requiert d'abord l'import de Lodash avec NodeJS:

```js
const _ = require('lodash');
```

ou la syntaxe Babel : 

```js
import _ from 'lodash'
```

## Quelques fonctions

Récupérer un élément d'un tableau à une position :

```js
let nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(_.nth(nums, 3)); // 4
console.log(_.nth(nums, -3)); // 6
```

Supprimer les doublons sans tri :

```js
const userIds: number[] = [12, 13, 14, 12, 5, 34, 11, 12];

const uniqueUserIds: number[] = _.uniq(userIds);
console.log(uniqueUserIds);
// [ 12, 13, 14, 5, 34, 11 ]
```

Supprimer les doublons avec tri :

```js
...
const uniqueUserIds: number[] = _.uniqBy(userIds);
...
// [ 5, 11, 12, 13, 14, 34 ]
```
Supprimer un élément du tableau facilement

```js
const greetings = ['hello', 'hi', 'hey', 'wave', 'hi']
_.pull(greetings, 'wave', 'hi')
...
// [ 'hello', 'hey' ]
```

Supprimer plusieurs éléments d'un tableau facilement

```js
...
_.pullAll(greetings, ['wave', 'hi'])
...
// [ 'hello', 'hey' ]
```

Assigne une ou plusieurs propriétés d’un objet à un objet source

```js
const foo: Foo = { a: "a property" };
const bar: Bar = { b: 4, c: "an other property" }
const result: Result = _.assign({ a: "an old property" }, foo, bar);
/*
result => { 
    a: 'a property', 
    b: 4, 
    c: 'an other property' 
} 
*/
```

Suppression des doublons d'un tableau

```js
const userIds = [12, 13, 14, 12, 5, 34, 11, 12]
const uniqueUserIds = _.uniq(userIds)

console.log(uniqueUserIds)
// [ 12, 13, 14, 5, 34, 11 ]
```


Suppression des doublons d'un tableau avec tri

```js
const users = [
  { id: 10, name: 'Phil', age: 32 },
  { id: 8, name: 'Jason', age: 44 },
  { id: 11, name: 'Rye', age: 28 },
  { id: 10, name: 'Phil', age: 32 }
]

const uniqueUserIds = _.uniqBy(userIds)
console.log(uniqueUsers)
/*
[
  { id: 10, name: 'Phil', age: 32 },
  { id: 8, name: 'Jason', age: 44 },
  { id: 11, name: 'Rye', age: 28 }
]
*/

```

Trouver la clé dans un objet

```js
const p = {
    name: "Peter Pan",
    age: "Not yet a grownup",
    location: "Neverland"
};

const res1 = _.findKey(p);        // returns "name"
const res2 = _.findLastKey(p);    // returns "location"
```

Vérifier si le string commence par un caractère donné

```js
const res = _.startsWith('abc', a) // => true
const res2 = _.startsWith('abc', b) // => false
const res3 = _.startsWith('abc', b, 1) // => true
```