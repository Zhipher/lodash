import template from 'lodash/template'
import words from 'lodash/words'
import head from 'lodash/head'
import { TemplateExecutor } from 'lodash'
import drop from 'lodash/drop'
import times from 'lodash/times'

let first: string|undefined = ''
let data: Array<string|undefined> = []

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
data = words(xml, rule)

// Exécuter 2 fois
times(2, () => {

    // Récupère le premier élément du tableau
    first = head(data)
    console.log('Premier élément :', first)


    // Supprime le premier élément du tableau
    data = drop(data)
    console.log('Tableau restant :', data)
})