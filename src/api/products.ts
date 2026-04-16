import { MOCK_PRODUCTS } from "./mock/index";
// import type { Product, ApiResponse } from '../types/product';

// const delay = (ms: number) =>
//   new Promise((resolve) => setTimeout(resolve, ms));


// export const getProducts = async (): Promise<Product[]> => {
//   console.log('GET /api/products');
//   await delay(500);
//   return MOCK_PRODUCTS;
// };

// export const getProductById = async (
//   id: string
// ): Promise<Product | undefined> => {
//   console.log(`GET /api/products/${id}`);
//   await delay(500);
//   return MOCK_PRODUCTS.find((p:Product) => p.id.toString() === id);
// };

// export const fetchProductsAPI = async (): Promise<ApiResponse<Product[]>> => {
//   // return axios.get('/api/products')
//   await delay(500);
//   return { data: MOCK_PRODUCTS };
// };

// export const fetchProductByIdAPI = async (id: number): Promise<ApiResponse<Product>> => {
//   await delay(300);
//   const product = MOCK_PRODUCTS.find(p => p.id === id);
//   if (!product) {
//     throw new Error('Item not found.');
//   }
//   return { data: product };
// };


export const mockApi = {
  getAll: () => Promise.resolve([...MOCK_PRODUCTS]),
  getById: (id: number) => {
    const product = MOCK_PRODUCTS.find(p => p.id === id);
    if (!product) return Promise.reject('Product not found');
    return Promise.resolve({ ...product });
  },
  getByCategory: (category: string) => {
    return Promise.resolve(MOCK_PRODUCTS.filter(p => p.category === category));
  },
  search: (query: string) => {
    const results = MOCK_PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description?.toLowerCase().includes(query.toLowerCase())
    );
    return Promise.resolve(results);
  }
};