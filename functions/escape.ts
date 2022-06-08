// 
// Convertir les caractères "&", "<", ">", '"' et "'" dans une chaîne en leurs entités HTML correspondantes.
// 

import escape from 'lodash/escape'

const res = escape('Jeanôu, &Rémi, <Brèz> <script>malicious.js</script>')

console.log(res)