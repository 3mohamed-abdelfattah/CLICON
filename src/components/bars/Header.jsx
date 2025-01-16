import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { resetCart } from "@/store/slices/cartSlice";
// Icons
import * as Icons from "@/utils/icons.util";
// Images
import LogoIcon from "@/assets/images/Logo.png";

// Reusable Styles
const styles = {
    aTagStyle: `block px-4 py-2 text-black hover:bg-secondaryText hover:text-white rounded cursor-pointer`,
    bottomNAV: `flex gap-2 rounded-sm text-[#5F6C72] items-center font-medium text-sm leading-5`,
};

export const Header = () => {
    const cartCount = useSelector((state) => state.cart.cartCount);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Handle user logout
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("cartItems");
        dispatch(resetCart());
        navigate("/");
    };

    // Toggle the dropdown menu
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="bg-primaryBackground w-full">
            {/* Top Navigation */}
            <nav className="hidden xs:flex justify-between items-center h-[52px] mx-5 md:mx-10 lg:mx-20 xl:mx-36">
                <p className="hidden md:block text-sm font-normal leading-5 text-white">
                    Welcome to Clicon online eCommerce store.
                </p>
                <span>
                    <Icons.FollowUsIcon />
                </span>
            </nav>

            <hr className="border-gray-500/80" />

            {/* Middle Navigation */}
            <div className="relative flex justify-evenly items-center h-[88px] px-3">
                {/* Logo */}
                <Link to="/home" aria-label="Home">
                    <span className="hidden md:block">
                        <Icons.Logo />
                    </span>
                    <div className="md:hidden w-10 xs:w-12 shrink-0">
                        <img src={LogoIcon} alt="logo" />
                    </div>
                </Link>

                {/* Search Bar */}
                <div className="flex w-full max-w-[646px] bg-white mx-5 px-5 py-[14px] rounded-sm gap-2 shadow">
                    <input
                        placeholder="Search for anything..."
                        className="text-sm font-normal leading-5 text-secondaryBackground w-full outline-none"
                    />
                    <button aria-label="Search">
                        <Icons.SearchIcon />
                    </button>
                </div>

                {/* User Actions */}
                <div className="flex gap-2 xs:gap-6">
                    <Link to="/cart" aria-label="Cart" className="relative">
                        <Icons.CartIcon />
                        {localStorage.getItem("token") && (
                            <div className="absolute -top-1 -right-1 border-[2.5px] border-primaryBackground flex justify-center items-center w-5 h-5 bg-white text-primaryBackground font-semibold text-sm rounded-full">
                                {cartCount}
                            </div>
                        )}
                    </Link>
                    <button className="hidden sm:block" aria-label="Favorites">
                        <Icons.FavoriteIcon />
                    </button>
                    <button className="cursor-pointer" onClick={toggleDropdown} aria-haspopup="true" aria-expanded={isDropdownOpen}>
                        <Icons.UserIcon />
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="flex flex-col sm:flex-row flex-wrap justify-evenly absolute text-center right-0 top-24 w-full bg-white/95 rounded-md shadow-lg py-2 z-10">
                            <a className={styles.aTagStyle} href="#profile">
                                Show Profile
                            </a>
                            <a className={styles.aTagStyle} href="#customer-service">
                                Customer Service
                            </a>
                            <a className={styles.aTagStyle} href="#favorites">
                                Show Favorites
                            </a>
                            <button
                                className="block px-4 py-2 hover:bg-secondaryText hover:text-white rounded text-red-600 font-medium cursor-pointer"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Navigation */}
            <nav className="flex justify-around items-center gap-16 h-20 bg-white px-2">
                <div className="flex items-center gap-2 lg:gap-6">
                    <Link to="/shop" className="flex gap-2 rounded-sm bg-[#F2F4F5] items-center px-6 py-[14px] font-medium text-sm leading-5">
                        All Category <Icons.DarkDropListIcon />
                    </Link>
                    <Link to="/track-order" className={styles.bottomNAV}>
                        <Icons.TrackIcon /> Track Order
                    </Link>
                    <Link to="/compare" className={`${styles.bottomNAV} hidden sm:flex`}>
                        <Icons.CompareIcon /> Compare
                    </Link>
                    <Link to="/customer-support" className={`${styles.bottomNAV} hidden sm:flex`}>
                        <Icons.SupportIcon /> Customer Support
                    </Link>
                    <Link to="/help" className={styles.bottomNAV}>
                        <Icons.HelpIcon /> Need Help
                    </Link>
                </div>
                <div className="hidden md:flex gap-2 text-sm lg:text-base">
                    <Icons.PhoneIcon />+1-202-555-0104
                </div>
            </nav>
        </header>
    );
};