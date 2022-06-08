// 
// Obtenir la valeur au chemin de l'objet. Si la valeur résolue n'est pas définie, defaultValue est renvoyée à sa place.
// _.get(object, path, [defaultValue])
// 


import get from 'lodash/get'

const object = { 'a': [{ 'b': { 'c': 3 } }] };
 
const res = get(object, 'a[0].b.c');
// => 3
 
const res2 = get(object, ['a', '0', 'b', 'c']);
// => 3
 
const res3 = get(object, 'a.b.c', 'default');
// => 'default'

console.log(res, res2, res3)