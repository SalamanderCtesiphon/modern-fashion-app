import React from 'react'
import { productsArray } from '../utility/inventory'
import ProductCard from '../components/ProductCard'
import './Shop.css'


function Shop() {
  const tempArray= productsArray.filter((product) => {
    return product.category === "tops"
  })

  return (
    <div className='shop-page'>
      <h1>Shop</h1>
      <div className="product-display">
        {tempArray.map((product, idx) => (
          <div key={product.id}>
            <ProductCard product={product}></ProductCard>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop