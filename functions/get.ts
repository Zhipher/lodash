// vérification de la valeur de réponse

import _ from 'lodash'

const apiResponse = {
  id: 33467,
  paymentRefernce: 'AEE3356T68',
  // `order` object missing
  processedAt: '2021-10-10 00:00:00'
}

const zipCode = _.get(apiResponse, 'order.payee.address.zipCode')
console.log('The order was sent to the zip code: ' + zipCode)
// The order was sent to the zip code: undefined
