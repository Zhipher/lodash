import join from 'lodash/join'
import template from 'lodash/template'
import words from 'lodash/words'
import intersection from 'lodash/intersection'
import { TemplateExecutor } from 'lodash'

const tab: Array<number> = [ 1, 2, 3 ]
const car: string = '~~~~~~~~~~~'

const res: string = join(tab, car)

console.log(res)
// 1~~~~~~~~~~~2~~~~~~~~~~~3