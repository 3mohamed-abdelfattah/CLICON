import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Store
import { fetchProducts, fetchProductsByCategory } from '@/store/slices/productsSlice';
import { addToCart } from '@/store/slices/cartSlice';
//Icons
import { GrayStarIcon, StarIcon, CartIcon, DiscountProductIcon } from '@/utils/icons.util';
//Images
import Whish from '@/assets/images/forDesign/wishlest.png';
import Checkout from '@/assets/images/forDesign/checkout.png';

export const Products = ({ category }) => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const productsStatus = useSelector((state) => state.products.status);

    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        if (category) {
            dispatch(fetchProductsByCategory(category));
        } else {
            dispatch(fetchProducts());
        }
    }, [dispatch, category]);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleClose = () => {
        setSelectedProduct(null);
    };

    const getStarRating = (rating) => {
        const fullStars = Math.floor(rating);
        const totalStars = 5;
        let stars = [];

        for (let i = 0; i < totalStars; i++) {
            if (i < fullStars) {
                stars.push(<StarIcon key={i} />);
            } else {
                stars.push(<GrayStarIcon key={i} />);
            }
        }

        return stars;
    };

    const handleAddToCart = () => {
        if (selectedProduct) {
            dispatch(addToCart(selectedProduct));
            setSelectedProduct(null);
        }
    };

    if (productsStatus === 'loading') return <div>Loading...</div>;

    return (
        <div className="relative">
            {/*  Product List */}
            <div className="grid grid-cols-2 mid_lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="border flex flex-col items-center mid_lg:w-[234px] rounded-lg overflow-hidden shadow-sm cursor-pointer"
                        onClick={() => handleProductClick(product)}
                    >
                        <img src={product.thumbnail} alt={product.title} className="h-48 w-full object-contain" />
                        <div className="w-full mx-4">
                            <div className="flex gap-1 px-4 pt-6">{getStarRating(product.rating)}</div>
                            <div className="px-4">
                                <p className="text-[#191C1F] font-bold text-sm xs:text-base py-2">{product.title}</p>
                                <p className="text-secondaryText font-semibold text-sm pb-4">${product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/*  Product Detail */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg relative w-4/5">
                        <button
                            className="absolute top-2 right-2 text-gray-600 font-bold text-xl"
                            onClick={handleClose}
                        >
                            &times;
                        </button>
                        <div className="flex flex-col md:flex-row gap-1 md:gap-10">
                            <span className="flex justify-center border border-gray-300">
                                <img
                                    src={selectedProduct.thumbnail}
                                    alt={selectedProduct.title}
                                    className="md:h-[464px] md:w-[616px] object-contain"
                                />
                            </span>
                            <div className="mt-4">
                                <div className="flex gap-1 py-2 items-center">
                                    {getStarRating(selectedProduct.rating)}{' '}
                                    <span className="hidden xs:block text-gray-600 text-sm">(21,671 User feedback)</span>
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold">{selectedProduct.title}</h2>
                                <p className="text-sm text-gray-600 py-2">{selectedProduct.description}</p>
                                <div className="flex items-center gap-2">
                                    <p className="text-sm sm:text-lg font-bold text-secondaryText py-2">
                                        ${selectedProduct.price}
                                    </p>
                                    <p className="text-sm sm:text-lg font-semibold text-gray-500 line-through py-2">
                                        ${Math.trunc(selectedProduct.price / selectedProduct.discountPercentage)}
                                    </p>
                                    <DiscountProductIcon />
                                </div>
                                <p className="md:text-lg text-green-700 py-2">{selectedProduct.availabilityStatus}</p>
                                <p className="text-gray-400 text-xs py-2">{selectedProduct.returnPolicy}</p>
                                <button
                                    className="flex items-center gap-5 my-4 bg-orange-500 text-white py-2 px-7 w-fit rounded"
                                    onClick={handleAddToCart}
                                >
                                    Add to Cart <CartIcon />
                                </button>
                                <img src={Whish} alt="Wishlist" className='hidden xs:block' />
                                <img src={Checkout} alt="Checkout" className='hidden xs:block' />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};