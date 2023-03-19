// 
// Prendre jusqu'à ce que la condition ne soit plus valide
// 

import { drop, head, findIndex, findLastIndex } from "lodash"
import takeWhile from "lodash/takeWhile"

let data: Array<string> = [
    'Armator',  'Firstname',
    'Louis',    'Firstname',
    'Lastname', 'Guéridon',
    'Lastname', 'Boat',
    'Boat',     'Chiffre',
    '19023.89', 'Chiffre',
    'Armator', 'test'
]

let res: Array<string|undefined> = []

data = drop(data)

res = takeWhile(data, (d) => d !== 'Armator')

console.log(res)

const readArbo = (data: Array<string>): Array<string> => {
    const first: string|undefined = head(data)
    console.log('First', first)
    console.log('ICI', findLastIndex(data, first))
    const newData: Array<string> = drop(data)
    const res: Array<string> = takeWhile(data, (d) => d !== first)
    return res
}

console.log(readArbo(data))