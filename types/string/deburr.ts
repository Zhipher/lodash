import deburr from 'lodash/deburr'

const sentence: string = 'Voìcì une phràsê'

const transformedSentence: string = deburr(sentence + ' non accentuée') 

console.log(transformedSentence)