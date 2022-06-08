import unescape from 'lodash/unescape'

const res = unescape("Jeanôu, &amp;Rémi, &lt;Brèz&gt; &lt;script&gt;malicious.js&lt;/script&gt;")

console.log(res)