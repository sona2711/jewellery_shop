import type { ProductAvailability } from "../../../types/product";

export const BOOK_BUTTON_TEXT = "Book this item";

export const AVAILABILITY_COLOR: Record<ProductAvailability, string> = {
  in_stock: "green",
  out_of_stock: "red",
  preorder: "gold",
};




