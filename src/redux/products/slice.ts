import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductsState } from "./types";
import type { Product } from "../../types/product";
import { fetchProducts } from "./thunk";

const initialState: ProductsState = {
  items: [],
  filteredItems: [],
  status: "idle",
  error: null,
  selectedCategory: null,
  searchQuery: "",
};

const filterProducts = (
  products: Product[],
  category: string | null,
  query: string,
): Product[] => {
  let filtered = [...products];

  if (category) {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (query) {
    const lowerQuery = query.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.description?.toLowerCase().includes(lowerQuery),
    );
  }

  return filtered;
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload;
      state.filteredItems = filterProducts(
        state.items,
        state.selectedCategory,
        state.searchQuery,
      );
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.filteredItems = filterProducts(
        state.items,
        state.selectedCategory,
        state.searchQuery,
      );
    },
    clearFilters: (state) => {
      state.selectedCategory = null;
      state.searchQuery = "";
      state.filteredItems = state.items;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        state.filteredItems = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const { setCategory, setSearchQuery, clearFilters } =
  productsSlice.actions;

export default productsSlice.reducer;
