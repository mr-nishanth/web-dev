import React from 'react';
import '../Styles/auth.scss';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const handleGoogleAuth = () => {};
    const handleGithubAuth = () => {};
    return (
        <div className='app__auth login'>
            <form onSubmit={handleSubmit}>
                <p className='auth__header'>
                    Gobi arts Developer community<span>Login</span>
                </p>
                <div className='input__container'>
                    <input
                        type='email'
                        placeholder='Email....'
                    />
                </div>
                <div className='input__container'>
                    <input
                        type='password'
                        placeholder='Password....'
                    />
                </div>
                <button className='auth__action'>Login</button>
                <div className='or__container'>
                    <div className='or__text'>
                        <p>OR</p>
                    </div>
                    <div className='or__wrapper'>
                        <button
                            className='google'
                            onClick={handleGoogleAuth}
                        >
                            Google
                        </button>
                        <button
                            className='github'
                            onClick={handleGithubAuth}
                        >
                            Github
                        </button>
                    </div>
                </div>
                <p className='linkWrapper'>
                    Don't have an account yet?{' '}
                    <Link to={'/register'}>Register</Link>
                </p>
            </form>
        </div>
    );
};
export default Login;
