import React, { useContext} from 'react'
import { CartContext } from '../pages/CartContext'
import '../pages/Shop.css'

function ProductCard(props) {
  const product = props.product
  const cart = useContext(CartContext)
  const productQuantity = cart.getProductQuantity(product.id)

  return (

    <div className='product-card'>
      <img src={product.image} alt='product' className='product-image'></img>
      <h3 className='title-container'>{product.title}</h3>
      <p>${product.price}</p>
      <div className="right-actions">
      { productQuantity > 0 ?
        <>
          <div className='adjust-item'>
            <div className='increment' onClick={() => cart.removeOneFromCart(product.id)} >-</div>
            <div>
              In cart: {productQuantity}
            </div>
            <div className='increment' onClick={() => cart.addOneToCart(product.id)} >+</div>
          </div>
          { productQuantity > 0 ?
              <div className='delete-btn' onClick={() => cart.deleteFromCart(product.id)} >delete</div>  
              :
              <></>
            }
        </> 
        :
        <>
         <div className='add-btn' onClick={() => cart.addOneToCart(product.id)} >Add One to Cart</div>
        </>
      }
      </div>
    </div>
  )
}

export default ProductCard