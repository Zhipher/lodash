# Lodash

But : 
- Itérer arrays, objects, & strings
- Manipuler & testing values
- Créer des fonctions composites

Récupérer un élément d'un tableau à une position
```js
const _ = require("lodash");

let nums = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(_.nth(nums, 3));
console.log(_.nth(nums, -3));
```

Supprimer les doublons sans tri

```js
const _ = require('lodash');

const userIds = [12, 13, 14, 12, 5, 34, 11, 12];

const uniqueUserIds = _.uniq(userIds);
console.log(uniqueUserIds);
// [ 12, 13, 14, 5, 34, 11 ]
```

Supprimer les doublons avec tri

```js
// ...
const uniqueUserIds = _.uniqBy(userIds);
console.log(uniqueUserIds);
// [ 12, 13, 14, 5, 34, 11 ]
```