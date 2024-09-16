import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch all products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data.products;
});

// Fetch all categories
export const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
    const response = await axios.get('https://dummyjson.com/products/categories');
    return response.data;
});

// Fetch products by category
export const fetchProductsByCategory = createAsyncThunk('products/fetchProductsByCategory', async (category) => {
    const response = await axios.get(`https://dummyjson.com/products/category/${category}`);
    return response.data.products;
});

// Fetch a single product by ID
export const fetchProductById = createAsyncThunk('products/fetchProductById', async (productId) => {
    const response = await axios.get(`https://dummyjson.com/products/${productId}`);
    return response.data;
});

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        categories: [],
        selectedProduct: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Handle fetch all products
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
            // Handle fetch categories
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
            })
            // Handle fetch products by category
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            // Handle fetch product by ID
            .addCase(fetchProductById.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.selectedProduct = action.payload;  // Set selected product
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default productsSlice.reducer;
