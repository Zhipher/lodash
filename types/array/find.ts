import head from 'lodash/head'
import { 
    TemplateExecutor, 
    template, 
    words, 
    times
} from 'lodash'
import drop from 'lodash/drop'
import findIndex from 'lodash/findIndex'
import findLastIndex from 'lodash/findLastIndex'

let first: string|undefined = ''
let data: Array<string|undefined> = []

const armator = {
    firstname: 'Louis',
    lastname: 'Guéridon',
    boats: [],
    ca: 19023.89
}

const skeleton: string = `
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

times(2, () => {
    first = head(data)
    data = drop(data)
})

const string: string = 'Armator'

const condition = (d: string|undefined) => d===string

// Trouver le premier élément
const firstIdx: number = findIndex(data, condition)

// Trouver le dernier élément
const lastIdx: number = findLastIndex(data, condition)

const length: number = data.length

const res = { first: firstIdx, last: lastIdx, size: length}
console.log(res)