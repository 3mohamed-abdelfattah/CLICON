import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Header, Footer } from '@/components';
//Store
import { removeFromCart, updateCartQuantity } from '@/store/slices/cartSlice';
//Icons
import { DeleteIcon } from '@/utils/icons.util';

export const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        setCartCount(cartItems.length);
    }, [cartItems]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    //Remove from cart
    const handleRemove = (id) => {
        dispatch(removeFromCart({ id }));
        const updatedItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    };

    //Change Item quantity
    const handleUpdateQuantity = (id, quantity) => {
        dispatch(updateCartQuantity({ id, quantity: parseInt(quantity, 10) }));

        const updatedItems = cartItems.map(item =>
            item.id === id ? { ...item, quantity: parseInt(quantity, 10) } : item
        );
        setCartItems(updatedItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    };

    //Cart Total Amount
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = (total * 0.1).toFixed(2);
    const discount = 24;
    const shipping = 10;
    const grandTotal = (total - discount + parseFloat(tax)).toFixed(2);

    return (
        <Fragment>
            <Header countItems={cartCount} />
            <div className="p-5 md:p-20">
                <div className="grid grid-cols-12 gap-6">

                    {/* Left Section */}
                    <div className="col-span-12 lg:col-span-8">
                        <h2 className="text-xl font-bold mb-4">Shopping Card</h2>
                        <table className="w-full bg-white shadow-lg rounded-lg">
                            <thead>
                                <tr className="bg-gray-100 text-left">
                                    <th className={styles.thStyle}>PRODUCTS</th>
                                    <th className={`${styles.thStyle} hidden sm:block`}>PRICE</th>
                                    <th className={styles.thStyle}>QTY</th>
                                    <th className={`${styles.thStyle} hidden xs:block text-center`}>SUB_Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="p-4 text-center">Cart is empty</td>
                                    </tr>
                                ) : (
                                    cartItems.map((item) => (
                                        <tr key={item.id} className="border-b">
                                            <td className="p-1 md:p-4">
                                                <div className="flex items-center">
                                                    <button
                                                        className="mr-2 text-red-600"
                                                        onClick={() => handleRemove(item.id)}
                                                    >
                                                        <DeleteIcon />
                                                    </button>
                                                    <img
                                                        src={item.thumbnail || '@/assets/images/error.png'}
                                                        alt={item.title}
                                                        className="w-12 h-12 xs:w-16 xs:h-16 object-cover mr-4"
                                                    />
                                                    <span className='text-sm md:text-base'>{item.title}</span>
                                                </div>
                                            </td>
                                            <td className="hidden sm:flex p-1 md:p-4">${item.price}</td>
                                            <td className="p-1 md:p-4 text-sm md:text-base">
                                                <input
                                                    type="number"
                                                    value={item.quantity}
                                                    onChange={(e) => handleUpdateQuantity(item.id, e.target.value)}
                                                    className="w-9 text-center border-2 rounded-full no-arrows"
                                                />
                                            </td>
                                            <td className="p-1 md:p-4 text-sm md:text-base hidden xs:flex items-center h-24">${(item.price * item.quantity).toFixed(2)}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                        <div className="flex justify-between mt-4">
                            <Link to='/shop'>
                                <button className={styles.buttonsStyle}>
                                    ← Return to Shop
                                </button>
                            </Link>
                            <button className={styles.buttonsStyle}>
                                Update Cart
                            </button>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="col-span-12 lg:col-span-4 bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-4">Cart Totals</h3>
                        <div className="mb-4">
                            <div className="flex justify-between">
                                <span>Sub-total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                            </div>
                            <div className="flex justify-between text-green-600">
                                <span>Discount</span>
                                <span>-${discount}</span>
                            </div>
                            <div className="flex justify-between mb-3">
                                <span>Tax</span>
                                <span>${tax}</span>
                            </div>
                            <hr />
                            <div className="flex justify-between font-bold text-lg mt-3 ">
                                <span>Total</span>
                                <span>${grandTotal} USD</span>
                            </div>
                        </div>
                        <button className="bg-orange-500 text-white w-full py-3 rounded font-semibold">
                            Proceed to Checkout →
                        </button>

                        {/* Coupon */}
                        <div className="mt-6">
                            <h4 className="text-lg font-semibold mb-2">Coupon Code</h4>
                            <input
                                type="text"
                                className="w-full p-2 border rounded-lg"
                                placeholder="HA381CJA290JJ2AS"
                            />
                            <button className="bg-blue-500 text-white w-full py-3 mt-2 rounded">
                                Apply Coupon
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

const styles = {
    thStyle: `p-4 text-sm md:text-base`,
    buttonsStyle: `border-2 border-secondaryText text-secondaryText py-2 px-2 xs:px-4 rounded`,
}