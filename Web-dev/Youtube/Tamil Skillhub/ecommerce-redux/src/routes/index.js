import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../container/Home'

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>

                {/* redirect to home page like header,dashboard */}
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}
