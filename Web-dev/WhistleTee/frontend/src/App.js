import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Consumer from './components/Consumer'
import Home from './components/Home'
import MatchWhistle from './components/MatchWhistle'
import Provider from './components/Provider'
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/provider' element={<Provider />} />
          <Route path='/consumer' element={<Consumer />} />
          <Route path='/matchWhistle' element={<MatchWhistle />} />
        </Routes>
      </Router>
    </div>
  )
}
