import React from 'react'
import { auth } from '../config/firebase'
import { signOut, onAuthStateChanged } from 'firebase/auth'

function Header() {

  const logout = async () => {
    try {
      await signOut(auth)
    } catch (err) {
      console.error(err)
    }
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user.uid)
    } 
  })

  return (
    <div className='header'>
      <div className="left-container">
        <div className="icon-holder"><a href="home">ICON</a></div>
        <h3 className="title">MODERN FASHION</h3>
        <button onClick={() => logout()} >Logout</button>
      </div>
      <div className="right-container">
        <ul className="link-list">
          <li className="link"><a className='link-tag' href="shirts">SHIRTS</a></li>
          <li className="link"><a className='link-tag' href="pants">PANTS</a></li>
          <li className="link"><a className='link-tag' href="shoes">SHOES</a></li>
          <li className="link"><a className='link-tag' href="checkout">CHECKOUT</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header