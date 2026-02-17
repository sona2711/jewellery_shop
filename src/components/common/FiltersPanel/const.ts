import type { MetalType, ProductCategory } from "../../../types/product";

export const CATEGORY_OPTIONS: {value: ProductCategory;labelKey: string;}[] = [
    { value: 'ring', labelKey: 'filters.category.ring' },
    { value: 'wedding-ring', labelKey: 'filters.category.weddingRing' },
    { value: 'necklace', labelKey: 'filters.category.necklace' },
    { value: 'pendant', labelKey: 'filters.category.pendant' },
    { value: 'bracelet', labelKey: 'filters.category.bracelet' },
    { value: 'earring', labelKey: 'filters.category.earring' },
    { value: 'cufflink', labelKey: 'filters.category.cufflink' },
  ];
  
    
  export const METAL_OPTIONS: {value: MetalType;labelKey: string;}[] = [
    { value: 'gold-585', labelKey: 'filters.metal.gold585' },
    { value: 'gold-750', labelKey: 'filters.metal.gold750' },
    { value: 'silver-925', labelKey: 'filters.metal.silver925' },
    { value: 'silver-925-rhodium', labelKey: 'filters.metal.silver925Rhodium' },
  ];
    
  export const STONE_OPTIONS = [
    { value: "diamond", labelKey: "filters.stone.diamond" },
    { value: "naturalDiamond", labelKey: "filters.stone.naturalDiamond" },
    { value: "emerald", labelKey: "filters.stone.emerald" },
    { value: "blueSapphire", labelKey: "filters.stone.blueSapphire" },
    { value: "topazLondonBlue", labelKey: "filters.stone.topazLondonBlue" },
    { value: "topazSwissBlue", labelKey: "filters.stone.topazSwissBlue" },
    { value: "topazImperialBrazilian", labelKey: "filters.stone.topazImperialBrazilian" },
    { value: "tourmalineGreen", labelKey: "filters.stone.tourmalineGreen" },
    { value: "tourmalineRubellite", labelKey: "filters.stone.tourmalineRubellite" },
    { value: "swarovski", labelKey: "filters.stone.swarovski" },
    { value: "onyx", labelKey: "filters.stone.onyx" }
  ];
  
    
    
    export const AVAILABILITY_OPTIONS = [
    { value: "inStock", labelKey: "filters.availability.inStock" },
    { value: "onOrder", labelKey: "filters.availability.onOrder" },
    ];
    
    
    export const PRICE_MIN = 500;
    export const PRICE_MAX = 1000000;