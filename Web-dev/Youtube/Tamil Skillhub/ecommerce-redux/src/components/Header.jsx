import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()
    return (
        <header className='bg-secondary p-3'>
            <h3 className='pb-3'>BlackShop</h3>
            <div className='row justify-content-center '>
                <div className='col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex gap-3'>
                    <button className='btn btn-success' onClick={() => navigate("/")}>Home</button>
                    <input type="search" className='form-control' placeholder='Search product' />
                    <button className='btn btn-success' onClick={() => navigate("/card")} > Cart</button>
                </div>
            </div>
        </header >
    )
}
