import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data.products;
});

export const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
    const response = await axios.get('https://dummyjson.com/products/categories');
    return response.data;
});

export const fetchProductsByCategory = createAsyncThunk('products/fetchProductsByCategory', async (category) => {
    const response = await axios.get(`https://dummyjson.com/products/category/${category}`);
    return response.data.products;
});

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        categories: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
            })
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
                state.items = action.payload;
            });
    },
});

export default productsSlice.reducer;