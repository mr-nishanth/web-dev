import React from 'react'
import ProductCard from '../components/ProductCard'
import { ProductList } from '../data/ProductList'

export default function Dashboard() {
  return (
    <main>
      <h4 className='mt-3'>Dashboard</h4>
      <div className='d-flex flex-wrap justify-content-center p-3'>
        {
          ProductList.map((product) => <ProductCard {...product} key={product.id} />)
        }
      </div>
    </main>
  )
}
