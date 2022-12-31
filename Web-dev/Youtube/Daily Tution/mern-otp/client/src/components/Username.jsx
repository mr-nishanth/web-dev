import React from 'react'
import { Link } from 'react-router-dom'

const Username = () => {
    return (
        <div className="container mx-auto">
            <div className='flex  h-screen'>
                <div>
                    <div className="title flex-col items-center">
                        <h4 className='text-5xl font-bold'>Hello</h4>
                        <span className='py-4 text-xl w-2/3 text-center text-gray-500'>Hello</span>
                    </div>
                    <form action="" className='py-1'>
                        <div className="profile flex justify-center py-4">
                            <img src="" alt="avatar" />
                        </div>
                        <div className="textbox flex flex-col items-center gap-6">
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder='Username'
                            />
                            <button type='submit'>Lets Tee</button>
                        </div>
                        <div className="text-center py-4">
                            <span className='text-gray-500'>Not a Register
                                <Link to="/register" className='text-blue-500'> Register Now </Link> </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Username