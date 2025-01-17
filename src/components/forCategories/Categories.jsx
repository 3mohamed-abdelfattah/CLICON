import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Store
import { fetchCategories } from '@/store/slices/productsSlice';

export const Categories = ({ onCategorySelect, selectedCategory }) => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.products.categories);
    const [selected, setSelected] = useState(selectedCategory);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleCategorySelect = (slug) => {
        setSelected(slug);
        onCategorySelect(slug);
    };

    return (
        <div className="flex flex-col gap-3">
            <p className='uppercase px-4 text-gray-900 text-base font-medium'>Category</p>
            <div className="flex md:block max-h-80 overflow-x-auto md:overflow-y-auto">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => handleCategorySelect(category.slug)}
                        className={`flex w-full items-center space-x-2 px-4 py-2 focus:outline-none ${selected === category.slug ? 'bg-white text-black' : ' text-gray-700'}`}
                    >
                        <span
                            className={`w-5 h-5 rounded-full border ${selected === category.slug ? 'border-orange-500 bg-orange-500' : 'border-gray-400 bg-white'} flex items-center justify-center`}
                        >
                            {selected === category.slug && (
                                <span className="w-2 h-2 rounded-full bg-white" />
                            )}
                        </span>
                        <span className='text-sm xs:text-base'>{category.name}</span>
                    </button>
                ))}
            </div>
            <span className='hidden md:block pl-2'>
                {/* Images */}
            </span>
        </div>
    );
};