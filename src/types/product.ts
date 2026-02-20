export type ProductAvailability = "in_stock" | "out_of_stock" | "preorder";
export type ProductCategory = 'ring' | 'necklace' | 'bracelet'| 'earring' | 'cufflink' | 'pendant' | 'wedding-ring';
export type CollectionGender = "men" | "women" | "unisex";
export type MetalType = 'gold-585'| 'gold-750'| 'silver-925'| 'silver-925-rhodium';




export type  ProductAttributes = {
    metal: string; 
    stone?: string;
    weight?: string;
    size?: string; 
    purity?: string;
    color?: string; 
    dimensions?: string;
};


export type ProductOption = {
    value: string;
    label: string;
    available: boolean;
    priceDelta?:number
};
  
export type ProductVariant = {
    sku: string;
    price: number;
    availability: ProductAvailability;
    stock: number;
    size?: string;
    metal?: string;
};
  

export type Product = {
    id: number;
    name: string;
    gender: CollectionGender;
    images: string[];
    category: ProductCategory;
    availability: ProductAvailability;
    sku: string;
    collection?: string;
    collectionSlug?: string;
    price: number;
    basePrice: number;
    description?: string;
    attributes?: ProductAttributes;
    options?: {
        sizes?: ProductOption[];
        metals?: ProductOption[];
    };
    goldStandard?: string;
    isExclusive?: boolean;
    variants?: ProductVariant[];
    similarProducts: string[];
  };

export type ProductResponse = {
    data: Product[];
    total: number;
    page: number;
    limit: number;
};