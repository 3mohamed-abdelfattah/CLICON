import React from 'react'
import { DiscountBar, Header, Footer, SubscribeBar, AdsSlider } from '@/components'

export const HomePage = () => {
    return (
        <main className='relative'>
            <p className='text-xl text-center bg-secondaryBackground text-[#EBC80C] p-2'>⚠️Note: This page is under development and improvement, but I have ensured that the rest of the website can be navigated normally.⚠️</p>
            <DiscountBar />
            <Header />
            <AdsSlider />
            <SubscribeBar />
            <Footer />
        </main>
    )
}