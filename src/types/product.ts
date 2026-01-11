export type ProductAvailability = "in_stock" | "out_of_stock" | "preorder";

export type  ProductAttributes = {
    metal: string; 
    stone?: string;
    weight?: string;
    size?: string; 
    purity?: string;
    color?: string; 
    dimensions?: string;
}
export type Product = {
    id: number;
    name: string;
    images: string[];
    price: number;
    availability: ProductAvailability;
    attributes: ProductAttributes;
    description: string;
    category: string;
    collection?: string;
    sku: string;
    similarProducts: string[];
}

export type ProductResponse = {
    data: Product[];
    total: number;
    page: number;
    limit: number;
}