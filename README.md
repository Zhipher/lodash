# Lodash

## Introduction

But :

- Itérer les tableaux, les objets, & les chaînes
- Manipuler & tester les valeurs
- Créer des fonctions composites
  
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

console.log(_.nth(nums, 3));
console.log(_.nth(nums, -3));
// 4
// 6
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
const uniqueUserIds: number[] = _.uniqBy(userIds);
console.log(uniqueUserIds);
// [ 12, 13, 14, 5, 34, 11 ]
```