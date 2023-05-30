import React, { useContext } from 'react'
import { auth } from '../config/firebase'
import { signOut } from 'firebase/auth'
import { CartContext } from '../pages/CartContext'
import Icon from '@mdi/react';



function Header({currentUser}) {

  const cart = useContext(CartContext)
  const productsCount = cart.items.length

  const logout = async () => {
    try {
      await signOut(auth)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className='header'>
      <div className="left-container">
        <div className="icon-holder"><a href="home">ICON</a></div>
        {currentUser ? <h3 className="title">Current User</h3> : <h3 className="title">MODERN FASHION</h3>}
      </div>
      {currentUser ? <button onClick={() => logout()}>Logout</button> : <button><a href='signin'>Sign in</a></button>}
      <div className="right-container">
        <ul className="link-list">
          <li className="link"><a className='link-tag' href="shirts">SHIRTS</a></li>
          <li className="link"><a className='link-tag' href="pants">PANTS</a></li>
          <li className="link"><a className='link-tag' href="shoes">SHOES</a></li>
          <li className="link"><a className='link-tag' href="checkout">CHECKOUT</a></li>
          
        </ul>
        <div className='shopping-cart'>
        { productsCount > 0 ? 
          <div className='product-count'>{productsCount}</div>
          :
          <></>
        }
        <a className="navLinks" href='checkout'></a>
      </div>
    </div>
    </div>
  )
}

export default Header