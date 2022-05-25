// Affiche les éléments divergeants de deux tableaux

import _ from 'lodash'

const allUserIds: number[] = [1, 3, 4, 2, 10, 22, 11, 8, 9];
const activeUserIds: number[] = [1, 4, 22, 11, 8];

const inactiveUserIds: number[] = _.difference(allUserIds, activeUserIds)
console.log(inactiveUserIds)