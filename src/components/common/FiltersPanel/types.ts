export type Category = "ring" | "necklace" | "bracelet" | "pendant";
export type Metal = "gold" | "silver" | "platinum";
export type Stone = "diamond" | "sapphire" | "emerald" | "ruby";
export type Availability = "inStock" |"out_of_stock"|"preorder"


export type PriceRange = [number, number];


export type FilterValues = {
category?: Category;
metal?: Metal;
stone?: Stone;
price?: PriceRange;
availability?: Availability;
};


export type FilterProps = {
value?: FilterValues;
onChange: (value: FilterValues) => void;
};