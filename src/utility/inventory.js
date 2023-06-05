import coffee from '../images/coffee-beans.jpg'

// coffee: price_1NDUqHALqsWPo0rqaedrsnqV
// FIRESTORE_API_KEY=sk_test_51NDHdfALqsWPo0rqTYarcWhGze7u5MV3CUfzuJ5XqHacDEVV5FKuMrSjPLv9XfFzroB1DTC6H7mfxVmAKBgA0Dz8006c2RGJAB
// sunglasses: price_1NDUryALqsWPo0rqBrjlBt4k
// camera: price_1NDUsuALqsWPo0rqXmagBcXk

const productsArray = [
  {
    id: 'price_1NDUqHALqsWPo0rqaedrsnqV',
    title: 'Brazilian Coffee',
    price: 4.99, 
    image: coffee,
    category: 'tops'
  },
  {
    id: 'price_1NEcMrALqsWPo0rqehm08HMs',
    title: 'Jamaican Coffee',
    price: 9.99,
    image: coffee,
    category: 'tops'
  },
  {
    id: 'price_1NEcNmALqsWPo0rq9vGEKKyi',
    title: 'Guatemalan Antiqua',
    price: 14.99,
    image: coffee,
    category: 'tops'
  },
  {
    id: 'price_1NEcOpALqsWPo0rqe3TqxJxd',
    title: 'Columbian Coffee',
    price: 10.99,
    image: coffee,
    category: 'tops'
  },
  {
    id: 'price_1NEcZ2ALqsWPo0rqTNRON9Ci',
    title: 'Sumatran Coffee',
    price: 9.99,
    image: coffee,
    category: 'tops'
  },
  {
    id: 'price_1NEcZlALqsWPo0rq4NYNe8fw',
    title: 'Kenyan Coffee',
    price: 19.99,
    image: coffee,
    category: 'tops'
  }
]

function getProductData(id) {
  let productData = productsArray.find(product => product.id === id)

  if(productData === undefined) {
    return undefined
  }

  return productData
}

export { productsArray, getProductData }