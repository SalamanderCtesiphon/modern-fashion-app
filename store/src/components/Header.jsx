import React, { useContext } from 'react'
import { auth } from '../config/firebase'
import { signOut } from 'firebase/auth'
import { CartContext } from '../pages/CartContext'
import logo from '../icons/logo-png.png'

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
        <div className="icon-holder"><a href="home"><img src={logo} alt="company logo" id='logo' /></a></div>
      </div>
     <div className="right-side">
      <div className="right-container">
          <ul className="link-list">
            <li className="link"><a className='link-tag' href="shirts">SHIRTS</a></li>
            <li className="link"><a className='link-tag' href="pants">PANTS</a></li>
            <li className="link"><a className='link-tag' href="shoes">SHOES</a></li>        
          </ul>
        </div>
        <div className="utility-container">
          <a className='link-tag' href="checkout">CHECKOUT</a>
            <div className='shopping-cart'>
              { productsCount > 0 ? 
                <div className='product-count'>{productsCount}</div>
                :
                <></>
              }
            </div>
          {currentUser ? <button id='log-in-btn' onClick={() => logout()}>Logout</button> : <button><a href='signin'>Sign in</a></button>}
        </div>
     </div>
    </div>
  )
}

export default Header