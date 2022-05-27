import _ from 'lodash'

const res = _.unescape("Jeanôu, &amp;Rémi, &lt;Brèz&gt; &lt;script&gt;malicious.js&lt;/script&gt;")

console.log(res)