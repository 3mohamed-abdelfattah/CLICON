import React, { Fragment, useState } from 'react';
import { BlackIcon, CloseIcon, DiscountIcon, RightArrowDarkIcon } from '@/utils/icons.util';

export const DiscountBar = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <Fragment>
            {isVisible && (
                <header className='relative flex justify-evenly items-center bg-secondaryBackground w-full h-20'>
                    <span className='flex'>
                        <BlackIcon />
                        <p className='font-semibold text-2xl text-white'>Friday</p>
                    </span>

                    <span className='hidden sm:flex'>
                        <DiscountIcon />
                    </span>

                    <span className='hidden md:flex'>
                        <button className='flex items-center gap-8 px-6 font-bold text-sm rounded-sm leading-[48px] uppercase bg-WarningText text-secondaryBackground'>
                            Shop now <RightArrowDarkIcon />
                        </button>
                    </span>

                    <span className='absolute right-5 cursor-pointer' onClick={handleClose}>
                        <CloseIcon />
                    </span>
                </header>
            )}
        </Fragment>
    );
};