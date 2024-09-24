import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Header, Footer } from '@/components';
import { EyeIcon, ORIcon, RightArrowIcon, WithAppleIcon, WithGoogleIcon, RootIcon } from '@/utils/icons.util';

export const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        try {
            const response = await axios.post('https://dummyjson.com/auth/login', {
                username,
                password,
            });

            localStorage.setItem('token', response.data.token);

            navigate('/home');
        } catch (error) {
            setErrorMessage('Login failed. Please check your credentials and try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main>
            <Header />
            <div className='py-6 px-5 md:px-36 bg-gray-100'><RootIcon /></div>
            <div className="flex items-center justify-center shadow-inner">
                <div className="w-full max-w-[424px] border border-[#E4E7E9] my-5 sm:my-24 bg-white rounded shadow-md">
                    <div className="flex justify-between items-center text-center">
                        <p className="text-xl font-semibold text-center leading-7 text-[#191C1F] py-4 w-full border-b-4 border-primaryText ">Sign In</p>
                        <p className="text-xl font-semibold text-center leading-7 text-[#77878F] py-4 w-full border-b border-[#77878F]/50">Sign Up</p>
                    </div>
                    <form className="mt-6" onSubmit={handleSignIn}>
                        <div className='flex flex-col justify-center items-center'>
                            <span className='w-72 xs:w-[360px] '>
                                <label className="text-sm leading-5 text-[#191C1F] w-full text-left">Username</label>
                                <input
                                    type="text"
                                    className="w-full max-w-[360px] border border-[#E4E7E9] h-11 px-4 py-2 mt-2 text-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </span>
                        </div>
                        <div className="flex flex-col justify-center items-center mt-4">
                            <span className='w-72 xs:w-[360px] '>
                                <span className='flex items-center justify-between'>
                                    <label className="text-sm leading-5 text-[#191C1F]">Password</label>
                                    <a href="#" className="text-sm font-medium text-secondaryText hover:underline">
                                        Forget Password
                                    </a>
                                </span>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        className="w-full max-w-[360px] border border-[#E4E7E9] h-11 px-4 py-2 mt-2 text-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 px-4 py-2 text-gray-600 focus:outline-none"
                                    >
                                        {showPassword ? <EyeIcon /> : <EyeIcon />}
                                    </button>
                                </div>
                            </span>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2 mb-8'>
                            <button
                                type="submit"
                                className="w-72 sm:w-[360px] mt-6 mb-4 text-white bg-orange-500 rounded-sm hover:bg-orange-600 focus:outline-none"
                                disabled={loading}
                            >
                                {loading ?
                                    <span className='flex justify-center items-center text-sm font-bold leading-[48px] gap-2'>
                                        Signing in...
                                    </span>
                                    : (
                                        <span className='flex justify-center items-center text-sm font-bold leading-[48px] gap-2'>
                                            SIGN IN
                                            <RightArrowIcon />
                                        </span>
                                    )}
                            </button>
                            {errorMessage && (
                                <p className="text-red-500 text-sm mb-4 px-5">{errorMessage}</p>
                            )}
                            <span className='hidden xs:block'>
                            <ORIcon />
                            <WithGoogleIcon />
                            <WithAppleIcon />
                            </span>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </main>
    );
};