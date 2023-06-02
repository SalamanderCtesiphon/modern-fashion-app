import tShirts from '../images/md-salman-tWOz2_EK5EQ-unsplash.jpg'
import shoes from '../images/pexels-andre-moura-2562992.jpg'
import dressShirt from '../images/nimble-made-N0ke5zChVBU-unsplash(1).jpg'


// coffee: price_1NDUqHALqsWPo0rqaedrsnqV
// FIRESTORE_API_KEY=sk_test_51NDHdfALqsWPo0rqTYarcWhGze7u5MV3CUfzuJ5XqHacDEVV5FKuMrSjPLv9XfFzroB1DTC6H7mfxVmAKBgA0Dz8006c2RGJAB
// sunglasses: price_1NDUryALqsWPo0rqBrjlBt4k
// camera: price_1NDUsuALqsWPo0rqXmagBcXk

const productsArray = [
  {
    id: 'price_1NDUqHALqsWPo0rqaedrsnqV',
    title: 'Coffee',
    price: 4.99, 
    image: tShirts,
    category: 'tops'
  },
  {
    id: 'price_1NDUryALqsWPo0rqBrjlBt4k',
    title: 'Sunglasses',
    price: 9.99,
    image: shoes,
    category: 'tops'
  },
  {
    id: 'price_1NDUsuALqsWPo0rqXmagBcXk',
    title: 'Camera',
    price: 39.99,
    image: dressShirt,
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