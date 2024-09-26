import React from 'react'
import { DiscountBar, Header, Footer, SubscribeBar, HomeMain } from '@/components'

export const HomePage = () => {

    return (
        <main>
            <DiscountBar />
            <Header />
            <HomeMain />
            <SubscribeBar />
            <Footer />
        </main>
    )
}