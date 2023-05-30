import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import CartProduct from '../components/CartProduct'
import Icon from '@mdi/react';
import { mdiArrowLeftBold } from '@mdi/js';



function CheckOut() {
  const cart = useContext(CartContext)
  const productsCount = cart.items.length

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  let cartTotal = cart.getTotalCost().toFixed(2)

  function paymentProcessor() {
    console.log('click')
  }

  return (
    <div className='checkout-page'>
         {productsCount > 0 ?
            <>
              <h3 className='page-head'><a id="link-back" href='/categories'><Icon path={mdiArrowLeftBold} size={1} />Return to shopping</a></h3>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
              ))}

              <h1 className='total'>Total: {USDollar.format(cartTotal)}</h1>

              <button onClick={() => paymentProcessor()} className='buy-btn'>
                Purchase Items!
              </button>
            </>
          :
          <>
          <h1>There Are No Items In Your Cart</h1> 
          <a className="navLinks" href='categories'>Back to Shopping</a>
          </> 
          }
    </div>
  )
}

export default CheckOut