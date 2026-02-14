import type { Product } from "../../../types/product";

export type BannerProps = {
    categoryList?: Product[];// add category list , seperated by category
    coverText: string;
}