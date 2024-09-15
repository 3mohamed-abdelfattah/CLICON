import React, { useState } from 'react'
import Categories from '../products/Categories';
import Products from '../products/Products';
import Cart from '../Cart';

export const HomeMain = () => {

    const [category, setCategory] = useState('');

    return (
        <div>
            <Categories onCategorySelect={setCategory} />
            <Products category={category} />
            {/*
            <Cart />
             */}
        </div>
    )
}