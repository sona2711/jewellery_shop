import giftBox from "../../../assets/images/products/gift-box/Box.png";

export const IMAGE = giftBox
export const ACCORDION_KEYS = {
    DETAILS: "details",
    CARE: "care",
    GIFTING: "gifting",
    
  } as const;
  
export const ATTRIBUTE_LABEL_I18N: Record<string, string> = {
    metal: "product.attributes.metal",
    stone: "product.attributes.stone",
    weight: "product.attributes.weight",
    size: "product.attributes.size",
    sku: "product.attributes.sku",
};

