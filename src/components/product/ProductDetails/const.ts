import type { ProductAvailability } from "../../../types/product";
import type { PDPConfig } from "../ProductForm/types";

export const BOOK_BUTTON_TEXT = "Book this item";

export const AVAILABILITY_COLOR: Record<ProductAvailability, string> = {
  in_stock: "green",
  out_of_stock: "red",
  preorder: "gold",
};

export const mockPdp: PDPConfig = {
  basePrice: 1290,
  sizes: [
    { value: "18", label: "18", available: true },
    { value: "20", label: "20", available: true, priceDelta: 100 },
    { value: "21", label: "21", available: true, priceDelta: 150 },
    { value: "22", label: "22", available: true, priceDelta: 200 },
  ],
  metals: [
    { value: "gold", label: "Gold", available: true },
    { value: "gold rose", label: "Gold Rose ", available: true, priceDelta: +100 },
    { value: "silver", label: "Silver", available: true, priceDelta: -200 },
  ],
};
