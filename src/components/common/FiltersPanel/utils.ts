import type { PriceRange } from "./types";


export const isValidPriceRange = (range?: PriceRange): boolean => {
    if (!range) return true;
    const [min, max] = range;
    return min >= 0 && max >= min;
};