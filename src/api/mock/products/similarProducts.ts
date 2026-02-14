import type { Product } from "../../../types/product";

export const attachSimilarProducts = (products: Product[],limit: number = 8): Product[] => {
  return products.map((product) => {
    const sameCollectionSameCategory = products.filter(
      (p) =>
        p.id !== product.id &&
        p.collection === product.collection &&
        p.category !== product.category
    );

    const sameCollection = products.filter(
      (p) =>
        p.id !== product.id &&
        p.collection === product.collection &&
        p.category === product.category
    );

    const sameCategory = products.filter(
      (p) =>
        p.id !== product.id &&
        p.category === product.category &&
        p.collection !== product.collection
    );

    const fallback = products.filter(
      (p) => p.id !== product.id
    );

    const merged = [
      ...sameCollectionSameCategory,
      ...sameCollection,
      ...sameCategory,
      ...fallback,
    ];

    
    const unique = Array.from(
      new Map(merged.map((p) => [p.id, p])).values()
    );

    return {
      ...product,
      similarProducts: unique
        .slice(0, limit)
        .map((p) => p.id.toString()),
    };
  });
};
