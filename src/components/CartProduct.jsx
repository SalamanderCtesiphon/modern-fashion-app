import React, { useContext} from 'react'
import { CartContext } from '../pages/CartContext'
import { getProductData } from '../utility/inventory'

function CartProduct(props) {
  const cart = useContext(CartContext)
  const id = props.id
  const quantity = props.quantity
  const productData = getProductData(id)

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  let subTotal = (quantity * productData.price).toFixed(2) 

  return (
    <>
      <div className='check-out-card'>
        <img src={productData.image} alt="product" className='check-out-image'></img>
        <div className='cc-sub-section'>
          <div>Product Name:</div>
          <h3>{productData.title}</h3>
        </div>
        <div className='cc-sub-section-two'>
          <p>total:  {quantity}</p>
        </div>
        <div className='cc-sub-section-three'>
          <div>Sub Total:</div>
          <p>{ USDollar.format(subTotal)}</p>
        </div>
        <div className="dlt-btn" onClick={() => cart.deleteFromCart(id)}>Remove</div>
      </div>
    </>
  )
}

export default CartProduct