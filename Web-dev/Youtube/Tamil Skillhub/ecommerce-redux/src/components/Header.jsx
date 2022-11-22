import React from 'react'

export default function Header() {
    return (
        <header className='bg-secondary p-3'>
            <h3 className='pb-3'>BlackShop</h3>
            <div className='row justify-content-center '>
                <div className='col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex gap-3'>
                    <button className='btn btn-success'>Home</button>
                    <input type="search" className='form-control' placeholder='Search product' />
                    <button className='btn btn-success'>Cart</button>
                </div>
            </div>
        </header>
    )
}
