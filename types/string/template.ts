import template from 'lodash/template'

let xml, compiled

const armator = {
    firstname: 'Louis',
    lastname: 'Guéridon',
    boats: [],
}

const skeleton = `
    <Armator>
        <Firstname><%= firstname %><Firstname/>
        <Lastname><%= lastname %><Lastname/>
        <Boat><%= boats %></Boat>
    <Armator/>
`

compiled = template(skeleton)
xml = compiled(armator)

console.log(xml)