import React from 'react'
import { productsArray } from '../utility/inventory'

function Shoes() {
  const tempArray= productsArray.filter((product) => {
    return product.category === "footware"
  })
  return (
    <div className='shop-page'>
      <h1>Shoes</h1>
      <div className="product-display">
        {tempArray.map((product, idx) => (
          <div className="product-card" key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.image} alt="product image" />
            <p>price: {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shoes