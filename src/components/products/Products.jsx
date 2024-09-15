import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fetchProductsByCategory } from '@/store/slices/productsSlice';
//! import { addToCart } from '@/store/slices/cartSlice';
import { GrayStarIcon, StarIcon } from '@/utils/icons.util';

const Products = ({ category }) => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const productsStatus = useSelector((state) => state.products.status);

    useEffect(() => {
        if (category) {
            dispatch(fetchProductsByCategory(category));
        } else {
            dispatch(fetchProducts());
        }
    }, [dispatch, category]);

    //! const handleAddToCart = (product) => {
    //!     dispatch(addToCart(product));
    //! };

    if (productsStatus === 'loading') return <div>Loading...</div>;

    const getStarRating = (rating) => {
        const fullStars = Math.floor(rating);
        const totalStars = 5;
        let stars = [];

        for (let i = 0; i < totalStars; i++) {
            if (i < fullStars) {
                stars.push(<StarIcon />);
            } else {
                stars.push(<GrayStarIcon />);
            }
        }

        return stars;
    };

    return (
        <div className="grid grid-cols-4 gap-4 p-4">
            {products.map((product) => (
                <div key={product.id} className="border flex flex-col items-center w-[234px] rounded-lg overflow-hidden shadow-sm">
                    <img src={product.thumbnail} alt={product.title} className="h-48 w-full object-contain" />
                    <div className='w-full mx-4'>
                        <div className="flex gap-1 px-4 pt-6">{getStarRating(product.rating)}</div>
                        <div className="px-4">
                            <p className="text-[#191C1F] font-bold text-base py-2">{product.title}</p>
                            <p className="text-secondaryText font-semibold text-sm pb-4">${product.price}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;