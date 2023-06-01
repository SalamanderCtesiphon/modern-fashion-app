import React from 'react'
import { productsArray } from '../utility/inventory'
import ProductCard from '../components/ProductCard'


function Pants() {
  const tempArray= productsArray.filter((product) => {
    return product.category === "pants"
  })

  return (
    <div className='shop-page'>
      <h1>Shoes</h1>
      <div className="product-display">
        {tempArray.map((product, idx) => (
          <div className="product-card" key={product.id}>
            <ProductCard product={product}></ProductCard>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pants