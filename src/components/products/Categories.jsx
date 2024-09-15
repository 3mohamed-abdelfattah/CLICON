import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '@/store/slices/productsSlice';

const Categories = ({ onCategorySelect }) => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.products.categories);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <div className="categories-list">
            {categories.map((category, index) => (
                <button key={index} onClick={() => onCategorySelect(category.slug)}>
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default Categories;