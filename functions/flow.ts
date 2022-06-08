// 
// Crée une fonction qui renvoie le résultat de l'invocation des fonctions données avec la liaison this de la fonction créée, où chaque invocation successive reçoit la valeur de retour de la précédente.
// 

import flow from 'lodash/flow'
import add from 'lodash/add'

const square = (n: number) => n * n

const addSquare = flow([ add, square ])
const res: number = addSquare(1, 4)

console.log(res)
// => 9