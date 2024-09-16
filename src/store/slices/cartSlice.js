import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: JSON.parse(localStorage.getItem('cartItems')) || []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find(i => i.id === item.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }

            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload.id;
            state.items = state.items.filter(item => item.id !== itemId);

            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        updateCartQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.quantity = quantity;

                localStorage.setItem('cartItems', JSON.stringify(state.items));
            }
        }
    }
});

export const { addToCart, removeFromCart, updateCartQuantity } = cartSlice.actions;

export default cartSlice.reducer;