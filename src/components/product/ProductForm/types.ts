import type { ProductAvailability } from "../../../types/product";

export type MetalOption = 'Gold'|'Silver' |'Rose Gold';

export type DeliveryOptions = 'deliver'| 'pickup';


export type ProductFormValues = {
    size?: string;
    metal?: string;
    delivery: DeliveryOptions;
    quantity: number;
}


export type PDPOption = {
    value: string;
    label: string;
    available: boolean;
    priceDelta?: number;
};
  
export type PDPConfig = {
    name: string;
    description: string;
    availability: ProductAvailability;
    basePrice: number;
    sizes?: PDPOption[];
    metals?: PDPOption[];
};