'use client';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import Button from '@/app/components/Button';
import Input from '@/app/components/inputs/Input';
import { useCallback, useState } from 'react';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import AuthSocialButton from './AuthSocialButton';

type Variant = 'LOGIN' | 'REGISTER';

function AuthForm() {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true);

        if (variant === 'REGISTER') {
            console.log({ REGISTERED_DATA: data });
            // try {
            //     if (!data) return toast.error('Please fill all fields');
            //     const { data: any } = await axios.post('/api/register', data);
            //     toast.success('Registration successfully ');
            // } catch (error) {
            //     console.log({ REGISTERED_ERROR: error });
            //     toast.error('Something went wrong!, Please try again');
            // }
            // setIsLoading(false);

            await axios
                .post('/api/register', data)
                .then(() => toast.success('Registration successfully '))
                .catch((error) => {
                    console.log({ REGISTERED_ERROR: error });
                    toast.error('Something went wrong!, Please try again');
                })
                .finally(() => setIsLoading(false));
        }

        if (variant === 'LOGIN') {
            console.log({ LOGIN_DATA: data });
            // NextAuth SignIn
            signIn('credentials', {
                ...data,
                redirect: false,
            })
                .then((response) => {
                    if (response?.error) {
                        console.log({ LOGIN_ERROR: response?.error });
                        const message =
                            response?.error ?? 'Invalid credentials';
                        toast.error(message);
                    }

                    if (response?.ok && !response?.error) {
                        toast.success('Logged In');
                    }
                })
                .finally(() => setIsLoading(false));
        }
    };

    const socialAction = (action: string) => {
        setIsLoading(true);

        // NextAuth Social SignIn
    };

    return (
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10'>
                <form
                    className='space-y-6'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {variant === 'REGISTER' && (
                        <Input
                            label='Name'
                            id='name'
                            type='text'
                            register={register}
                            errors={errors}
                            disabled={isLoading}
                        />
                    )}
                    <Input
                        label='Email'
                        id='email'
                        type='email'
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />
                    <Input
                        label='Password'
                        id='password'
                        type='password'
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />
                    <div>
                        <Button
                            disabled={isLoading}
                            fullWidth
                            type='submit'
                        >
                            {variant === 'LOGIN' ? 'Sign In' : 'Register'}
                        </Button>
                    </div>
                </form>
                {/* Divider */}
                <div className='mt-6'>
                    <div className='relative'>
                        <div className='absolute inset-0 flex items-center '>
                            {/* Divider Line */}
                            <div className='w-full border-t border-gray-300' />
                        </div>
                        <div className='relative flex justify-center text-sm'>
                            <span className='bg-white px-2 text-gray-500'>
                                Or continue with
                            </span>
                        </div>
                    </div>
                    {/* Social Login Button */}
                    <div className='mt-6 flex gap-2'>
                        <AuthSocialButton
                            icon={BsGithub}
                            onClick={() => socialAction('github')}
                        />
                        <AuthSocialButton
                            icon={BsGoogle}
                            onClick={() => socialAction('google')}
                        />
                    </div>
                </div>
                {/* SignIn and Register toggle  */}
                <div className='flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500'>
                    <div>
                        {variant === 'LOGIN'
                            ? 'New to Messenger?'
                            : 'Already have an account?'}
                    </div>
                    <div
                        onClick={toggleVariant}
                        className='underline cursor-pointer'
                    >
                        {variant === 'LOGIN' ? 'Create an account' : 'Login'}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthForm;
