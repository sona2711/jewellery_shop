import { getProducts, getProductById } from '../api/products'; 

export const fetchProducts = () => getProducts(); 
export const fetchProduct = (id: string) => getProductById(id);