import React from 'react'
import { CompanyLogo, SubscribeButtonIcon } from '../../utils/icons.util'

export const SubscribeBar = () => {
    return (
        <main className='flex flex-col justify-center items-center h-[452px] bg-primaryBackground'>
            <p className='font-semibold text-white text-3xl leading-10'>Subscribe to our newsletter</p>
            <p className='max-w-[536px] text-center text-white/60 text-base leading-6 p-3'>Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.</p>
            <span className='flex w-[624px] bg-white px-4 py-[12px] rounded-sm gap-2 shadow-xl m-8'>
                <input
                    placeholder='Email address'
                    className='text-sm font-normal leading-5 text-secondaryBackground w-full'
                />
                <span className='cursor-pointer'>
                    <SubscribeButtonIcon />
                </span>
            </span>
            <hr className='border-gray-500' />
            <CompanyLogo />
        </main>
    )
}