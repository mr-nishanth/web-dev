'use client';

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

export default function SignUpPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: '',
        password: '',
        username: '',
    });

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSignUp = async () => {
        try {
            setLoading(true);
            const response = await axios.post('/api/users/signup', user);
            console.log('Sign-up success', response?.data);
            toast.success(response?.data?.message);
            router.push('/login');
        } catch (error: any) {
            console.log('Sign-up failed: ' + error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user.email.length && user.password.length && user.username.length) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2 shadow-sm'>
            <h1 className='text-2xl'>
                {loading ? 'Request Processing' : 'SignUp'}
            </h1>
            <hr />
            <label htmlFor='username'>Username</label>
            <input
                className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-blue-500'
                type='text'
                id='username'
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder='Username'
                required
            />
            <label htmlFor='email'>Email</label>
            <input
                className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-blue-500'
                type='email'
                id='email'
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder='Email'
                required
            />
            <label htmlFor='password'>Password</label>
            <input
                className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-blue-500'
                type='password'
                id='password'
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder='Password'
                required
            />
            <button
                onClick={onSignUp}
                className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
                disabled={buttonDisabled}
            >
                {buttonDisabled ? 'Fill all fields' : 'SignUp here'}
            </button>
            <Link href={'/login'}>Login Page</Link>
        </div>
    );
}
