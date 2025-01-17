import { useState } from "react";
import { Link } from "react-router-dom";
// Icons
import * as Icons from "@/utils/icons.util";

export const DiscountBar = () => {
    // State to manage visibility of the discount bar
    const [isVisible, setIsVisible] = useState(true);

    // Function to handle the close action
    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <>
            {isVisible && (
                <header className="relative flex justify-between items-center bg-secondaryBackground w-full sm:h-20 py-1 sm:py-0 px-5 xs:px-10 lg:px-20">
                    {/* Brand section with icon and label */}
                    <div className="flex items-center w-24 xs:w-32 sm:w-auto">
                        <Icons.BlackIcon />
                        <p className="font-semibold xs:text-xl sm:text-2xl text-white">Friday</p>
                    </div>

                    {/* Discount icon */}
                    <div className="flex w-20 xs:w-32 sm:w-auto">
                        <Icons.DiscountIcon />
                    </div>

                    {/* Shop now button, visible only on medium and larger screens */}
                    <div className="flex gap-5">
                        <Link to="/shop" className="hidden md:flex items-center gap-2 px-6 font-bold text-sm rounded-sm leading-[48px] uppercase bg-WarningText text-secondaryBackground">
                            Shop now <Icons.RightArrowDarkIcon />
                        </Link>

                        {/* Close button */}
                        <button className="cursor-pointer" onClick={handleClose} aria-label="Close Discount Bar">
                            <Icons.CloseIcon />
                        </button>
                    </div>
                </header>
            )}
        </>
    );
};