import React, { useContext} from 'react'
import { CartContext } from '../pages/CartContext'
import '../pages/Shop.css'

function ProductCard(props) {
  const product = props.product
  const cart = useContext(CartContext)
  const productQuantity = cart.getProductQuantity(product.id)

  return (

    <div className='product-card'>
      { productQuantity > 0 ?
        <button onClick={() => cart.deleteFromCart(product.id)} >delete</button>  
        :
        <></>
      }
      <img src={product.image} alt='product' className='product-image'></img>
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      { productQuantity > 0 ?
        <>
          <div className='adjust-item'>
            <button className='increment' onClick={() => cart.removeOneFromCart(product.id)} >-</button>
            <div>
              In cart: {productQuantity}
            </div>
            <button className='increment' onClick={() => cart.addOneToCart(product.id)} >+</button>
          </div>
        </> 
        :
        <>
         <button className='nav-link' onClick={() => cart.addOneToCart(product.id)} >Add One to Cart</button>
        </>
      }
    </div>
  )
}

export default ProductCard