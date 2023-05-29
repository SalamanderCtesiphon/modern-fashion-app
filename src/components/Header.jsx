import React from 'react'

function Header() {
  return (
    <div className='header'>
      <div className="left-container">
        <div className="icon-holder">ICON</div>
        <h3 className="title">MODERN FASHION</h3>
      </div>
      <div className="right-container">
        <ul className="link-list">
          <li className="link">TOPS</li>
          <li className="link">PANTS</li>
          <li className="link">SHOES</li>
        </ul>
      </div>
    </div>
  )
}

export default Header