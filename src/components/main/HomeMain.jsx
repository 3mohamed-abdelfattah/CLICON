import React, { useState } from 'react'
import Categories from '../products/Categories';
import Products from '../products/Products';
import Cart from '../Cart';

export const HomeMain = () => {

    const [category, setCategory] = useState('');

    return (
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
    )
}