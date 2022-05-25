const orderData = {
  internal: [
    { userId: 1, date: '2021-09-09', amount: 230.0, type: 'prepaid' },
    { userId: 2, date: '2021-07-07', amount: 130.0, type: 'prepaid' }
  ],
  external: [
    { userId: 3, date: '2021-08-08', amount: 30.0, type: 'postpaid' },
    { userId: 4, date: '2021-06-06', amount: 330.0, type: 'postpaid' }
  ]
}

// find user ids that placed postpaid orders (internal or external)
const postpaidUserIds = []

for (const [orderType, orders] of Object.entries(orderData)) {
  postpaidUserIds.push(orders.filter((order) => order.type === 'postpaid'))
}
console.log(postpaidUserIds)

const flatUserIds = _.flatten(postpaidUserIds)
console.log(flatUserIds)
