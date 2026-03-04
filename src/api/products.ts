import { PRODUCTS_MOCK } from "./mock/index";
import type { Product, ApiResponse } from '../types/product';

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));


export const getProducts = async (): Promise<Product[]> => {
  console.log('GET /api/products');
  await delay(500);
  return PRODUCTS_MOCK;
};

export const getProductById = async (
  id: string
): Promise<Product | undefined> => {
  console.log(`GET /api/products/${id}`);
  await delay(500);
  return PRODUCTS_MOCK.find((p:Product) => p.id.toString() === id);
};

export const fetchProductsAPI = async (): Promise<ApiResponse<Product[]>> => {
  // return axios.get('/api/products')
  await delay(500);
  return { data: PRODUCTS_MOCK };
};

export const fetchProductByIdAPI = async (id: number): Promise<ApiResponse<Product>> => {
  await delay(300);
  const product = PRODUCTS_MOCK.find(p => p.id === id);
  if (!product) {
    throw new Error('Item not found.');
  }
  return { data: product };
};