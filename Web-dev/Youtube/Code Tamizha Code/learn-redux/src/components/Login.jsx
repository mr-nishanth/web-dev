import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../redux/features/user'

export default function Login() {
    const [user, setUser] = useState({})
    const dispatch = useDispatch()

    const handleChange = (e) => {
        //console.log("Called")
        const payload = { ...user, [e.target.name]: e.target.value }
        // console.log(payload)
        // handleClick(payload)
        setUser(payload)
        console.log(user)
    }

    const handleClick = () => {
        // const payload = {
        //     name: "Nishanth",
        //     age: 22,
        //     email: "nishanth@gmail.com"
        // }
        dispatch(login(user))
    }



    return (

        < div className='bg-pink center flex-col'>

            <label htmlFor="name">Name</label>
            <input type="text" name='username' onChange={handleChange} /> <br />
            <label htmlFor="email">Email</label>
            <input type="email" name='email' onChange={handleChange} /> <br />
            <label htmlFor="age">Age</label>
            <input type="number" name='age' onChange={handleChange} /> <br />
            <button type='submit' onClick={handleClick}>Login</button>
        </ div>
    )
}
