import React from 'react'

function Header() {
  return (
    <div className='header'>
      <div className="left-container">
        <div className="icon-holder"><a href="home">ICON</a></div>
        <h3 className="title">MODERN FASHION</h3>
      </div>
      <div className="right-container">
        <ul className="link-list">
          <li className="link"><a href="shirts">SHIRTS</a></li>
          <li className="link"><a href="pants">PANTS</a></li>
          <li className="link"><a href="shoes">SHOES</a></li>
          <li className="link"><a href="checkout">CHECKOUT</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header