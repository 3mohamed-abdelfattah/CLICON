import { createSlice } from '@reduxjs/toolkit';

const loadCartFromLocalStorage = () => {
    const cartItems = localStorage.getItem('cartItems');
    return cartItems ? JSON.parse(cartItems) : [];
};

const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: loadCartFromLocalStorage(),
    },
    reducers: {
        addToCart: (state, action) => {
            const { id, title, price } = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ id, title, price, quantity: 1 });
            }
            saveCartToLocalStorage(state.items);
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload;
            state.items = state.items.filter((item) => item.id !== id);
            saveCartToLocalStorage(state.items);
        },
        updateCartQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find((item) => item.id === id);
            if (item) {
                item.quantity = quantity;
                saveCartToLocalStorage(state.items);
            }
        },
    },
});

export const { addToCart, removeFromCart, updateCartQuantity } = cartSlice.actions;
export default cartSlice.reducer;