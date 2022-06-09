import template from 'lodash/template'
import words from 'lodash/words'
import head from 'lodash/head'
import { TemplateExecutor } from 'lodash'
import drop from 'lodash/drop'

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

// Récupère le premier élément du tableau
let first: string|undefined = head(data)

// Supprime le premier élément du tableau
let newData: Array<string> = drop(data)

first = head(newData)
newData = drop(newData)

console.log(newData)