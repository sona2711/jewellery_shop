import type { Product } from "../../types/product"; 

export type CartItem =   Product & {
  quantity: number;
}

export type CartState = {
  items: CartItem[];
  totalAmount: number;
  totalItems: number;
}