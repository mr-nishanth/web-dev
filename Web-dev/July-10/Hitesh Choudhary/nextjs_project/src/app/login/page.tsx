'use client';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

export default function LoginPage() {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post('/api/users/login', user);
            console.log('Login success', response?.data);
            toast.success(response?.data?.message);
            router.push('/profile');
        } catch (error: any) {
            console.log('Login failed: ' + error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user.email.length && user.password.length) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2 shadow-sm'>
            <h1 className='text-2xl'>
                {loading ? 'Login Processing' : 'Login'}
            </h1>
            <hr />

            <label htmlFor='email'>Email</label>
            <input
                className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-blue-900'
                type='email'
                id='email'
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder='Email'
            />
            <label htmlFor='password'>Password</label>
            <input
                className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-blue-900'
                type='password'
                id='password'
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder='Password'
            />
            <button
                onClick={onLogin}
                className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
            >
                {buttonDisabled ? 'Fill all fields' : 'Login here'}
            </button>
            <Link href={'/signup'}>SignUp Page</Link>
        </div>
    );
}
