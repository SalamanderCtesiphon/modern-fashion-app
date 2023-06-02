import React, { useContext } from 'react'
import { auth } from '../config/firebase'
import { signOut } from 'firebase/auth'
import { CartContext } from '../pages/CartContext'
import logo from '../icons/Coffee.png'

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
      <div className="right-side">
        <div className="right-container">
          <div className="link-list">
            <div onClick={() => {console.log('hi')}} className='link-tag'><a className="nav-link" href="shop">STORE</a></div>
            <div className='link-tag'><a className="nav-link" href="about">ABOUT</a></div>
            <div className='link-tag'><a className='nav-link' href="contact">CONTACT</a></div>        
          </div>
        </div>
        <div className="utility-container">
          <div className="shopping-container">
            <a className='link-tag nav-link' href="checkout">CHECKOUT</a>
            <div className='shopping-cart'>
              { productsCount > 0 ? 
                <div className='product-count'>{productsCount}</div>
               :
                <></>
              }
            </div>
          </div>
          {currentUser ? <div className='log-in-btn link-tag' onClick={() => logout()}>LOGOUT</div> 
            : 
            <div className='log-in-btn link-tag'><a href='signin' id='sign-in'>SIGN-IN</a></div>}
        </div>
      </div>
    </div>
  )
}

export default Header