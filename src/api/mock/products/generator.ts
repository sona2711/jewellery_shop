import type { Product } from "../../../types/product";
import { COLLECTIONS } from "./const";
import { randomFrom, randomPrice, generateSKU } from "./utils";
import { resolveProductImages } from "./imageResolver";
import { attachSimilarProducts } from "./similarProducts";

export const generateProducts = (itemsPerCollection = 20): Product[] => {
    let products: Product[] = [];
    let ID: number = 1;


    COLLECTIONS.forEach((config) => {
      for (let i = 0; i < itemsPerCollection; i++) {
        const category = randomFrom(config.categories);
        const metal = randomFrom(config.metals);
        const stone = config.stones ? randomFrom(config.stones) : undefined;
        const price = randomPrice(config.priceRange);
        
        const product: Product = {
          id: ID++,
          name: `${config.collection} ${stone ?? metal} ${category}`,
          gender:config.gender,
          images: [],
          category,
          collection: config.collection,
          price,
          basePrice: price,
          availability: "in_stock",
          sku: generateSKU(config.collection, i),
          similarProducts: [],
          isExclusive: config.isExclusive,
          goldStandard: config.purity,
          attributes: {
            metal,
            stone,
            purity: config.purity
          },
          options: config.options,
          variants: []
        };


        products.push({
          ...product,
          images: resolveProductImages(product),
        });
      }
    }
  )

  products = attachSimilarProducts(products);

  return products;
};

