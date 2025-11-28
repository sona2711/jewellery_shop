export type Product = {
    id: number | string;
    name: string;
    images: string[];
    price: number;
    availability: boolean;
    attributes: {
        metal: string; 
        stone?: string;
        weight?: string;
        size?: string; 
        purity?: string;
        color?: string; 
        dimensions?: string;
    };
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