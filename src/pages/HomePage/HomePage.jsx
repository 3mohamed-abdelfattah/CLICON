import React from 'react'
import { DiscountBar } from '../../components/bars/DiscountBar'

export const HomePage = () => {

    const styles = {
        mainContainer: `flex flex-col justify-center items-center h-screen bg-[#D6EFD8]`
    }

    return (
        <main className={styles.mainContainer}>
            <DiscountBar />
        </main>
    )
}