import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartIcon, CompareIcon, DarkDropListIcon, FavoriteIcon, FollowUsIcon, HelpIcon, Logo, PhoneIcon, SearchIcon, SupportIcon, TrackIcon, UserIcon } from '@/utils/icons.util';

export const Header = () => {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const styles = {
        aTagStyle: `block px-4 py-2 text-white font-bold hover:bg-secondaryText cursor-pointer`,
        bottomNAV: `flex gap-2 rounded-sm text-[#5F6C72] items-center font-medium text-sm leading-5`,
    }

    return (
        <header className='bg-primaryBackground w-full'>
            {/* TOP NAV */}
            <nav className='hidden xs:flex justify-evenly items-center h-[52px] px-2'>
                <p className='hidden sm:block text-sm font-normal leading-5 text-white'>Welcome to Clicon online eCommerce store.</p>
                <span>
                    <FollowUsIcon />
                </span>
            </nav>

            <hr className='border-gray-500' />

            {/* Middle NAV */}
            <nav className='flex justify-evenly items-center h-[88px] px-3'>
                <Link to='/home'>
                    <Logo />
                </Link>
                <span className='hidden sm:flex md:w-[646px] bg-white mx-2 px-5 py-[14px] rounded-sm gap-2 shadow'>
                    <input
                        placeholder='Search for anything...'
                        className='text-sm font-normal leading-5 text-secondaryBackground w-full'
                    />
                    <SearchIcon />
                </span>
                <span className='flex gap-2 xs:gap-6'>
                    <Link to='/cart'>
                        <CartIcon />
                    </Link>
                    <span className='hidden xs:block'>
                        <FavoriteIcon />
                    </span>
                    <span className='cursor-pointer' onClick={toggleDropdown}>
                        <UserIcon />
                    </span>

                    {isDropdownOpen && (
                        <div
                            className="absolute right-0 mt-8 w-fit xs:w-1/5 bg-black/75 rounded-md shadow-lg py-2 z-10"
                        >
                            <a className={styles.aTagStyle}>
                                Show Profile
                            </a>
                            <a className={styles.aTagStyle}>
                                Customer Service
                            </a>
                            <a className={styles.aTagStyle}>
                                Show Favorites
                            </a>
                            <a className={styles.aTagStyle}>
                                Show Cart
                            </a>
                            <span
                                className="block px-4 py-2 text-white font-bold hover:bg-secondaryText hover:text-red-500 cursor-pointer"
                                onClick={handleLogout}
                            >
                                Logout
                            </span>
                        </div>
                    )}
                </span>
            </nav>

            {/* Bottom NAV */}
            <nav className='flex justify-around items-center gap-16 h-20 bg-white px-2'>
                <span className='flex items-center gap-2 lg:gap-6'>
                    <button className='flex gap-2 rounded-sm bg-[#F2F4F5] items-center px-6 py-[14px] font-medium text-sm leading-5'>
                        All Category <DarkDropListIcon />
                    </button>
                    <button className={styles.bottomNAV}>
                        <TrackIcon /> Track Order
                    </button>
                    <button className={`${styles.bottomNAV} hidden sm:flex`}>
                        <CompareIcon /> Compare
                    </button>
                    <button className={`${styles.bottomNAV} hidden sm:flex`}>
                        <SupportIcon /> Customer Support
                    </button>
                    <button className={styles.bottomNAV}>
                        <HelpIcon /> Need Help
                    </button>
                </span>
                <span className='hidden md:flex gap-2 text-sm lg:text-base'>
                    <PhoneIcon />+1-202-555-0104
                </span>
            </nav>
        </header >
    );
};