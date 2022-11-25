import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/features/user'

export default function Profile() {
    const user = useSelector(state => state.user.value)
    const dispatch = useDispatch()
    const handleClickLogout = () => {
        dispatch(logout())
    }


    return (
        <div className='bg-pink center flex-col'>
            <h1>Profile Information</h1>
            <h2>Name : {user.username} </h2>
            <h2>Age : {user.age} </h2>
            <h2>Email : {user.email} </h2>
            <button type='submit' onClick={handleClickLogout}>Logout</button>
        </div>
    )
}
