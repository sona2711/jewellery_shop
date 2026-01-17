import { PRODUCTS_MOCK } from '../mocks/products.mock';
import type { Product } from '../types/product';

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