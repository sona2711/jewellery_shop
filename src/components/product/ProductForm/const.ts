import type { ProductCategory } from '../../../types/product';

export type ProductFormConfig = {
  hasSize: boolean;
  sizeType?: 'ring' | 'necklace' | 'bracelet' | 'pendant';
  showSizeGuide: boolean;
  showUrgency: boolean;
};

export const PRODUCT_FORM_CONFIG: Record<ProductCategory, ProductFormConfig> = {
  ring: {
    hasSize: true,
    sizeType: 'ring',
    showSizeGuide: true,
    showUrgency: true
  },
  necklace: {
    hasSize: true,
    sizeType: 'necklace',
    showSizeGuide: false,
    showUrgency: false
  },
  bracelet: {
    hasSize: true,
    sizeType: 'bracelet',
    showSizeGuide: true,
    showUrgency: false
  },
  pendant: {
    hasSize: true,
    sizeType: 'pendant',
    showSizeGuide: true,
    showUrgency: false
  },
  earring: {
    hasSize: false,
    showSizeGuide: false,
    showUrgency: false
  },
  cufflink: {
    hasSize: false,
    showSizeGuide: false,
    showUrgency: false
  },
  "wedding-ring": {
    hasSize: true,
    sizeType: "ring",
    showSizeGuide: true,
    showUrgency: false
  }
  
};

export const SIZE_PRESETS = {
    ring: [5, 6, 7, 8, 9],
    necklace: [18, 20, 22, 24, 26],
    bracelet: ['S', 'M', 'L'],
    pendant: ['S', 'M', 'L'],
  };
  
