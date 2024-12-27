import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// Components
import { Header, Footer } from '@/components';
// Icons
import * as Icons from '@/utils/icons.util';

// Styles for input fields
const styles = {
    inputsStyle: `w-full max-w-[360px] border border-[#E4E7E9] h-11 px-4 py-2 text-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400`
};

export const SignIn = () => {
    // Define state variables
    const [username, setUsername] = useState('michaelw');
    const [password, setPassword] = useState('michaelwpass');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    // Handle sign-in form submission
    const handleSignIn = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        try {
            // Make API request to handle sign in
            const response = await axios.post('https://dummyjson.com/auth/login', {
                username,
                password,
            });
            // Store the token in local storage
            localStorage.setItem('token', response.data.token);
            // Navigate to the home page
            navigate('/home');
        } catch (error) {
            // Set error message if login fails
            setErrorMessage('Login failed. Please check your credentials and try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Header component */}
            <Header />

            <div className='py-6 px-5 md:px-36 bg-gray-100'>
                <Icons.RootIcon />
            </div>

            {/* SignIn */}
            <section className="flex items-center justify-center shadow-inner mx-2">
                <div className="w-full max-w-[424px] border border-[#E4E7E9] my-5 sm:my-24 bg-white rounded shadow-md">
                    {/* Navigation between Sign In and Sign Up */}
                    <nav className="flex justify-between items-center text-center">
                        <p className="text-xl font-semibold text-center leading-7 text-[#191C1F] py-4 w-full border-b-4 border-primaryText cursor-pointer">Sign In</p>
                        <p className="text-xl font-semibold text-center leading-7 text-[#77878F] py-4 w-full border-b border-[#77878F]/50 cursor-not-allowed">Sign Up</p>
                    </nav>
                    {/* Sign In form */}
                    <form className="mt-6" onSubmit={handleSignIn}>
                        {/* username */}
                        <div className='flex flex-col justify-center items-center'>
                            <span className='w-72 xs:w-[360px] '>
                                <label className="text-sm leading-5 text-[#191C1F] w-full text-left mb-2">Username</label>
                                <input
                                    type="text"
                                    className={styles.inputsStyle}
                                    value={username}
                                    placeholder='michaelw'
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </span>
                        </div>
                        {/* password */}
                        <div className="flex flex-col justify-center items-center mt-4">
                            <span className='w-72 xs:w-[360px]'>
                                <span className='flex items-center justify-between mb-2'>
                                    <label className="text-sm leading-5 text-[#191C1F]">Password</label>
                                    <a href="#" className="text-sm font-medium text-secondaryText hover:underline">
                                        Forget Password
                                    </a>
                                </span>
                                <div className="flex items-center relative w-full max-w-[360px]">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        className={styles.inputsStyle}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder='michaelwpass'
                                        required
                                    />
                                    <span
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-2 text-gray-600 hover:text-gray-400 cursor-pointer"
                                    >
                                        {showPassword ? <Icons.HiddenEyeIcon /> : <Icons.EyeIcon />}
                                    </span>
                                </div>
                            </span>
                        </div>
                        {/* buttons */}
                        <div className='flex flex-col justify-center items-center gap-2 mb-8'>
                            {/* Sign In buttons */}
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
                                            <Icons.RightArrowIcon />
                                        </span>
                                    )}
                            </button>
                            {errorMessage && (
                                <p className="text-red-500 text-sm mb-4 px-5">{errorMessage}</p>
                            )}
                            {/* Google & Apple buttons */}
                            <aside className='w-full px-5'>
                                <Icons.ORIcon />
                                <span className="flex items-center border rounded-sm h-11 text-center text-sm text-[#475156] px-4 my-3 hover:bg-[#475156]/20 cursor-pointer">
                                    <Icons.WithGoogleIcon />
                                    <p className="text-center w-full">Login with Google</p>
                                </span>
                                <span className="flex items-center border rounded-sm h-11 text-center text-sm text-[#475156] px-4 hover:bg-[#475156]/20 cursor-pointer">
                                    <Icons.WithAppleIcon />
                                    <p className="text-center w-full">Login with Apple</p>
                                </span>
                            </aside>
                        </div>
                    </form>
                </div>
            </section>

            {/* Footer component */}
            <Footer />
        </>
    );
};