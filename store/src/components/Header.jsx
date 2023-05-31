import React, { useContext } from 'react'
import { auth } from '../config/firebase'
import { signOut } from 'firebase/auth'
import { CartContext } from '../pages/CartContext'
import logo from '../icons/logo-png.png'
import { NavLink } from 'react-router-dom'

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
        <nav>
          <ul className="link-list">
            <li className="link"><NavLink className='link-tag' to={'/shirts'}>SHIRTS</NavLink></li>
            <li className="link"><NavLink className='link-tag' to={'pants'}>PANTS</NavLink></li>
            <li className="link"><NavLink className='link-tag' to={'shoes'}>SHOES</NavLink></li>        
          </ul>
        </nav>
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