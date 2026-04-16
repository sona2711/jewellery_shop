// import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { mockApi } from '../../api/products';
import type { Product } from '../../types/product';

//usage with mock data

// Simulate real API with delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async () => {
    await delay(800); // Simulate network
    const products = await mockApi.getAll();
    return products;
  }
);

export const fetchProductById = createAsyncThunk<Product, number>(
  'products/fetchProductById',
  async (id, { rejectWithValue }) => {
    await delay(300);
    try {
      const product = await mockApi.getById(id);
      return product;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const searchProducts = createAsyncThunk<Product[], string>(
  'products/searchProducts',
  async (query) => {
    await delay(500);
    const results = await mockApi.search(query);
    return results;
  }
);


//usage with real data

// export const fetchProducts = createAsyncThunk<Product[]>(
//   "products/fetchProducts",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get("/api/jewelry");
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue("Failed to fetch products");
//     }
//   },
// );

// export const fetchProductById = createAsyncThunk<Product, number>(
//   "products/fetchProductById",
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`/api/jewelry/${id}`);
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue("Failed to fetch product");
//     }
//   },
// );
