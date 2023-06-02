import tShirts from '../images/md-salman-tWOz2_EK5EQ-unsplash.jpg'
import shoes from '../images/pexels-andre-moura-2562992.jpg'
import dressShirt from '../images/nimble-made-N0ke5zChVBU-unsplash(1).jpg'
import fancyShoes from '../images/jason-briscoe-tYGooMvu0hA-unsplash.jpg'
import blouse from '../images/pexels-anj-namoro-2850487.jpg'
import sweater from '../images/pexels-dom-j-45982.jpg'
import jeans from '../images/matthew-moloney-5NPId7L1_p4-unsplash.jpg'
import skinnyJeans from '../images/engin-akyurt-ahs1R32GG9Y-unsplash.jpg'
import sweatPants from '../images/engin-akyurt-oXYGKCYhQOI-unsplash.jpg'
import redPants from '../images/engin-akyurt-RSm7GBuMqos-unsplash.jpg'
import bagPants from '../images/clikcc-Ua-luh2pC5k-unsplash.jpg'
import ripPants from '../images/mohammad-faruque-OSRb7gfZlxo-unsplash.jpg'
import shirtTie from '../images/benjamin-rascoe-iNvK2Xmpx8o-unsplash.jpg'
import jackTie from '../images/benjamin-rascoe-JXf2e0nb_-o-unsplash.jpg'
import classVans from '../images/paul-gaudriault-a-QH9MAAVNI-unsplash.jpg'
import runners from '../images/usama-akram-kP6knT7tjn4-unsplash.jpg'
import joggers from '../images/martin-katler-Y4fKN-RlMV4-unsplash.jpg'
import hightech from '../images/eugene-chystiakov-b2uYNpBG7Ho-unsplash.jpg'

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
    category: 'footware'
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