import React, {useEffect, useState} from 'react'
import { db } from "../config/firebase"
import { collection, getDocs } from 'firebase/firestore'

function Shoes() {
  const [prodcutList, setProdcutList] = useState([])

  const productCollectionRef = collection(db, "inventory")

  useEffect(() => {
    const getProductList = async () => {
      try {
        const data = await getDocs(productCollectionRef)
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }))
        setProdcutList(filteredData)
      } catch (error) {
        console.log(error)
      }
    }
    getProductList()
  }, [])

  const filteredProducts = prodcutList.filter((product) => {
    return product.category === 'shoes'
  })
  
  return (
    <div>
      <h1>Shirts</h1>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Shoes