// 
// Créer un tableau de valeurs uniques qui sont incluses dans tous les tableaux donnés en utilisant SameValueZero pour les comparaisons d'égalité
// 

import template from 'lodash/template'
import words from 'lodash/words'
import intersection from 'lodash/intersection'
import { TemplateExecutor } from 'lodash'

const armator = {
    firstname: 'Louis',
    lastname: 'Guéridon',
    boats: [],
    ca: 19023.89
}

const skeleton = `
    <xml version="1.0"?>
    <Armator>
        <Firstname><%= firstname %><Firstname/>
        <Lastname><%= lastname %><Lastname/>
        <Boat><%= boats %></Boat>
        <Chiffre><%= ca %></Chiffre>
    <Armator/>
`

const compiled: TemplateExecutor = template(skeleton)

const xml: string = compiled(armator)

const rule: RegExp = /[^,< />\n]+/g
const data: Array<string> = words(xml, rule)

console.log(armator)
console.log(xml)
console.log(data)

const header: Array<string> = intersection(data)

console.log(header)