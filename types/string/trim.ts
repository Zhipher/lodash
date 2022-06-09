import trim from 'lodash/trim'

const demo = '  0000041000000  '

// Supprime les espaces
const demo1 = trim(demo)
console.log(demo1)
// demo1 => 0000041000000

// Suppresion des 0
const demo2 = trim(demo1, '0')
console.log(demo2)
// demo2 => 41

// trimStart => suppresion début
// trimEnd => suppresion fin