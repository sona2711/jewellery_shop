import type { Product } from "../../../types/product";


export type ProductDetailsProps = {
    product: Product;
    onBook: (productId: number | string) => void;
  };
  