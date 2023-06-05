import React from 'react'
import './Home.css'
import beans from '../images/coffee-beans.jpg'

function Home() {
  return (
    <div className='home-page'>
      <h1 className='banner'>Welcome to Coffee Importers</h1>
      <div className="display">
        <img id='coffee-beans' src={beans} alt="coffee beans" />
        <div className='text-card'>
          <h3>Thank you for taking the time to visit us here at Coffee Importers. We pride ourselves on bringing our clients the absolute premium coffee beans from around the globe.</h3>
          <br />
          <h3>Our buyers meticulously search farmer's markets in the world's coffee growing regions to bring you the highest quality free-trade fair-practice coffee in existence.</h3>
        </div>
        </div>
    </div>
  )
}

export default Home