import React, { useState } from 'react'
import { Header, Footer, Products, Categories } from '@/components';

export const ShopPage = () => {

    const [category, setCategory] = useState('');

    return (
        <main>
            <Header />
            <div className='flex flex-col md:flex-row justify-center my-10 gap-5'>
                <span className='md:max-w-80'>
                    <Categories onCategorySelect={setCategory} />
                </span>
                <span className=''>
                    <Products category={category} />
                </span>
                {/*
            <Cart />
             */}
            </div>
            <Footer />
        </main>
    )
}