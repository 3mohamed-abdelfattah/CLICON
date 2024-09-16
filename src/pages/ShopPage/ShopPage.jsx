import React, { useState } from 'react'
import Categories from '../../components/products/Categories'
import { Products } from '../../components/products/Products'
import { Header } from './../../components/bars/Header';
import { Footer } from './../../components/bars/Footer';

export const ShopPage = () => {

    const [category, setCategory] = useState('');

    return (
        <main>
            <Header />
            <div className='flex justify-center my-10 gap-5'>
                <span className='max-w-80 w-full'>
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