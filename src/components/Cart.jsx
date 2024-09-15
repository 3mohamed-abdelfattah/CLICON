import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartQuantity } from '@/store/slices/cartSlice';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleUpdateQuantity = (id, quantity) => {
        dispatch(updateCartQuantity({ id, quantity }));
    };

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? <p>Cart is empty</p> : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.title} - ${item.price} x {item.quantity}
                            <button onClick={() => handleRemove(item.id)}>Remove</button>
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => handleUpdateQuantity(item.id, e.target.value)}
                                min="1"
                            />
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ${total}</h3>
        </div>
    );
};

export default Cart;