import React, { useContext } from 'react'
import { auth } from '../config/firebase'
import { signOut } from 'firebase/auth'
import { CartContext } from '../pages/CartContext'
import logo from '../icons/Coffee.png'
import menu from '../icons/icons8-menu-50.png'

function Header({currentUser}) {

  // create a active state for each link and use that to selectively style the component
  // write a function that toggles the active class of each link 

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
      <img className='menu-icon' src={menu} alt="menu" />
      <div className="right-side">
        <div className="right-container">
          <div><a className="nav-link link-tag" href="shop">STORE</a></div>
          <div><a className="nav-link link-tag" href="about">ABOUT</a></div>
          <div><a className='nav-link link-tag' href="contact">CONTACT</a></div>       
        </div>
        <div className="utility-container">
          <a className='link-tag nav-link' href="checkout">CHECKOUT</a>
          <div className='shopping-cart'>
            { productsCount > 0 ? 
              <div className='product-count'>{productsCount}</div>
              :
              <></>
            }
          </div>
          {currentUser ? <div className='log-in-btn link-tag' onClick={() => logout()}>LOGOUT</div> 
            : 
            <div className='log-in-btn link-tag'><a href='/' id='sign-in'>SIGN-IN</a></div>}
        </div>
      </div>
    </div>
  )
}

export default Header