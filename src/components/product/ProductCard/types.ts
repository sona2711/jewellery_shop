import type { Product } from "../../../types/product";

export type ProductCardProps = {
  item: Product;
  onBook: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
};
