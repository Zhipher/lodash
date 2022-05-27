import _ from 'lodash'

const res = _.escape('Jeanôu, &Rémi, <Brèz> <script>malicious.js</script>')

console.log(res)