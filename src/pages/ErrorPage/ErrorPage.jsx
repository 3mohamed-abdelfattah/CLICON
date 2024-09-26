import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Header, Footer } from '@/components'
//Icons
import { GoBack, GoHome } from '@/utils/icons.util'
//images
import ErrorLogo from '@/assets/images/error.png'

export const ErrorPage = () => {
    return (
        <Fragment>
            <Header />
            <div className='flex flex-col justify-center items-center gap-5 mb-16'>
                <img className='max-w-[500px]' src={ErrorLogo} alt='ADS' />
                <p className='font-semibold text-4xl text-center leading-[44px]'>404, Page not founds</p>
                <p className='max-w-[536px] text-[#475156] text-center leading-6'>Something went wrong. It’s look that your requested could not be found. It’s look like the link is broken or the page is removed.</p>
                <div className='flex gap-4'>
                    <Link to='./home'>
                        <GoBack />
                    </Link>
                    <Link to='./home'>
                        <GoHome />
                    </Link>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}