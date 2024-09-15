import React from 'react'
import { DiscountBar, Header, Footer, SubscribeBar } from '@/components'
import { HomeMain } from '@/components/main/HomeMain'

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