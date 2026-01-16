export type ProductAvailability = "in_stock" | "out_of_stock" | "preorder";
export type ProductCategory = 'ring' | 'necklace' | 'bracelet'| 'earring' | 'cufflink' | 'pendant' | 'wedding-ring';

export type  ProductAttributes = {
    metal: string; 
    stone?: string;
    weight?: string;
    size?: string; 
    purity?: string;
    color?: string; 
    dimensions?: string;
};

export type Product = {
    id: number;
    name: string;
    images: string[];
    price: number;
    availability: ProductAvailability;
    attributes: ProductAttributes;
    description: string;
    category: ProductCategory;
    collection?: string;
    sku: string;
    similarProducts: string[];
};

export type ProductResponse = {
    data: Product[];
    total: number;
    page: number;
    limit: number;
};

export type ProductOption = {
    value: string;
    label: string;
    available: boolean;
    priceDelta?: number;
};
  
export type ProductVariant = {
    sku: string;
    price: number;
    availability: ProductAvailability;
  
    size?: string;
    metal?: string;
};
  
export type ProductWithVariants = Product & {
    basePrice: number;
    options?: {
      sizes?: ProductOption[];
      metals?: ProductOption[];
    };
    variants?: ProductVariant[];
};