import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartIcon, CompareIcon, DarkDropListIcon, FavoriteIcon, FollowUsIcon, HelpIcon, Logo, PhoneIcon, SearchIcon, SupportIcon, TrackIcon, UserIcon } from '@/utils/icons.util';

export const Header = () => {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <header className='bg-primaryBackground w-full'>

            {/* TOP NAV */}
            <nav className='flex justify-evenly items-center h-[52px]'>
                <p className='text-sm font-normal leading-5 text-white'>Welcome to Clicon online eCommerce store.</p>
                <span>
                    <FollowUsIcon />
                </span>
            </nav>

            <hr className='border-gray-500' />

            {/* Middle NAV */}
            <nav className='flex justify-evenly items-center h-[88px]'>
                <Logo />
                <span className='flex w-[646px] bg-white px-5 py-[14px] rounded-sm gap-2 shadow'>
                    <input
                        placeholder='Search for anything...'
                        className='text-sm font-normal leading-5 text-secondaryBackground w-full'
                    />
                    <SearchIcon />
                </span>
                <span className='flex gap-6'>
                    <CartIcon />
                    <FavoriteIcon />
                    <span
                        className='cursor-pointer'
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <UserIcon />
                    </span>

                    {isDropdownOpen && (
                        <div
                            className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <a
                                href="/cart"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            >
                                Cart
                            </a>
                            <span
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                onClick={handleLogout}
                            >
                                Logout
                            </span>
                        </div>
                    )}

                </span>
            </nav>

            {/* Bottom NAV */}
            <nav className='flex justify-around items-center gap-16 h-20 bg-white'>
                <span className='flex items-center gap-6'>
                    <button className='flex gap-2 rounded-sm bg-[#F2F4F5] items-center px-6 py-[14px] font-medium text-sm leading-5'>
                        All Category <DarkDropListIcon />
                    </button>
                    <button className='flex gap-2 rounded-sm text-[#5F6C72] items-center font-medium text-sm leading-5'>
                        <TrackIcon /> Track Order
                    </button>
                    <button className='flex gap-2 rounded-sm text-[#5F6C72] items-center font-medium text-sm leading-5'>
                        <CompareIcon /> Compare
                    </button>
                    <button className='flex gap-2 rounded-sm text-[#5F6C72] items-center font-medium text-sm leading-5'>
                        <SupportIcon /> Customer Support
                    </button>
                    <button className='flex gap-2 rounded-sm text-[#5F6C72] items-center font-medium text-sm leading-5'>
                        <HelpIcon /> Need Help
                    </button>
                </span>
                <span className='flex gap-2'>
                    <PhoneIcon />+1-202-555-0104
                </span>
            </nav>

        </header >
    );
};