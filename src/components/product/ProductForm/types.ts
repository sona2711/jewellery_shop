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
    basePrice: number;
    sizes?: PDPOption[];
    metals?: PDPOption[];
};