import template from 'lodash/template'
import words from 'lodash/words'

let res, compiled

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

compiled = template(skeleton)

const xml = compiled(armator)

const rule = /[^,< />\n]+/g
const data = words(xml, rule)

console.log(armator)
console.log(xml)
console.log(data)