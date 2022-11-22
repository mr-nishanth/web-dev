import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Cart from './Cart'
import Dashboard from './Dashboard'
import Product from './Product'

export default function Home() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}
