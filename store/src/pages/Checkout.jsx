import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import CartProduct from '../components/CartProduct'
import Icon from '@mdi/react';
import { mdiArrowLeftBold } from '@mdi/js';
import './Checkout.css'




function CheckOut() {
  const cart = useContext(CartContext)
  const productsCount = cart.items.length

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  let cartTotal = cart.getTotalCost().toFixed(2)

  const paymentProcessor = async () => {
      await fetch("http://localhost:4000/checkout", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({items: cart.items})
        }).then((response) => {
          return response.json()
        }).then((response) => {
          if(response.url) {
            window.location.assign(response.url)
          }
        })
      }
  

  return (
    <div className='check-out-page'>
         {productsCount > 0 ?
            <>
              <h3 className='dlt-btn '><a className='rtn-btn' id="link-back" href='/shop'><Icon path={mdiArrowLeftBold} size={1} />Return to shopping</a></h3>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
              ))}

              <h1 className='total'>Total: {USDollar.format(cartTotal)}</h1>

              <div onClick={() => paymentProcessor()} className='dlt-btn'>
                Purchase Items!
              </div>
            </>
          :
          <>
          
          <h1>There Are No Items In Your Cart</h1> 
          <h3 className='dlt-btn '><a className='rtn-btn' id="link-back" href='/shop'><Icon path={mdiArrowLeftBold} size={1} />Return to shopping</a></h3>
              
          </> 
          }
    </div>
  )
}

export default CheckOut