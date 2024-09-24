import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '@/store/slices/productsSlice';
import WatchAD from '@/assets/images/ads/adWatch.png'
import Design1 from '@/assets/images/forDesign/image1.png'
import Design2 from '@/assets/images/forDesign/image2.png'
import Design3 from '@/assets/images/forDesign/image3.png'

const Categories = ({ onCategorySelect, selectedCategory }) => {
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
            <div className="max-h-80 overflow-y-auto">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => handleCategorySelect(category.slug)}
                        className={`flex items-center space-x-2 px-4 py-2 focus:outline-none ${selected === category.slug ? 'bg-white text-black' : ' text-gray-700'}`}
                    >
                        <span
                            className={`w-5 h-5 rounded-full border ${selected === category.slug ? 'border-orange-500 bg-orange-500' : 'border-gray-400 bg-white'} flex items-center justify-center`}
                        >
                            {selected === category.slug && (
                                <span className="w-2 h-2 rounded-full bg-white" />
                            )}
                        </span>
                        <span>{category.name}</span>
                    </button>
                ))}
            </div>
            <span className='pl-2'>
                <hr />
                <img src={Design1} alt='ADS' />
                <hr />
                <img src={Design2} alt='ADS' />
                <hr />
                <img src={Design3} alt='ADS' />
                <hr />
                <img src={WatchAD} alt='ADS' />
            </span>
        </div>
    );
};

export default Categories;
