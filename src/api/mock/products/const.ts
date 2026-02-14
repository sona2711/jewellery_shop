import type { CollectionConfig } from "./types";

export const COLLECTIONS: CollectionConfig[] = [
    {
      collection: "Anna",
      gender: "women",
      categories: ["ring", "bracelet", "earring", "necklace","wedding-ring"],
      metals: ["White Gold", "Rose Gold"],
      stones: ["Diamond", "Sapphire", "Ruby"],
      purity: "18K",
      priceRange: [850, 1800],
      isExclusive: false,
      options: {
        sizes: [
          { value: "18", label: "18", available: true },
          { value: "20", label: "20", available: true, priceDelta: 100 },
          { value: "21", label: "21", available: true, priceDelta: 150 },
          { value: "22", label: "22", available: true, priceDelta: 200 },
        ],
        metals: [
          { value: "white_gold", label: "White Gold", available: true , priceDelta: +100},
          { value: "gold rose", label: "Gold Rose ", available: true, priceDelta: +300 },
        ]
      },
    },
    {
      collection: "The Father",
      gender: "men",
      categories: ["ring", "pendant","bracelet"],
      metals: ["Silver", "Gold"],
      purity: "14K",
      priceRange: [700, 1600],
      isExclusive: false,
      options: {
        sizes: [
          { value: "18", label: "18", available: true },
          { value: "20", label: "20", available: true, priceDelta: 100 },
          { value: "21", label: "21", available: true, priceDelta: 150 },
          { value: "22", label: "22", available: true, priceDelta: 200 },
        ],
        metals: [
          { value: "gold", label: "Gold", available: true , priceDelta: +300},
          { value: "silver", label: "Silver", available: true, priceDelta: -200 },
        ]
      },
    },
    {
      collection: "Signature",
      gender: "men",
      categories: ["ring", "bracelet", "pendant"],
      metals: ["Silver", "Gold"],
      purity: "22K",
      priceRange: [800, 1700],
      isExclusive: false,
      options: {
        sizes: [
          { value: "18", label: "18", available: true },
          { value: "20", label: "20", available: true, priceDelta: 100 },
          { value: "21", label: "21", available: true, priceDelta: 150 },
          { value: "22", label: "22", available: true, priceDelta: 200 },
          ],
        metals: [
          { value: "gold", label: "Gold", available: true , priceDelta: +300},
          { value: "silver", label: "Silver", available: true, priceDelta: -200 },
        ]
      },
    },
    {
      collection: "Alpha",
      gender: "men",
      categories: ["ring", "pendant"],
      metals: ["Gold", "Silver"],
      purity: "14K",
      priceRange: [750, 1500],
      isExclusive: false,
      options: {
        sizes: [
          { value: "18", label: "18", available: true },
          { value: "20", label: "20", available: true, priceDelta: 100 },
          { value: "21", label: "21", available: true, priceDelta: 150 },
          { value: "22", label: "22", available: true, priceDelta: 200 },
          ],
        metals: [
          { value: "gold", label: "Gold", available: true , priceDelta: +300},
          { value: "silver", label: "Silver", available: true, priceDelta: -200 },
        ]
      },
    },
    {
      collection: "Sparks",
      gender: "men",
      categories: ["ring", "bracelet", "cufflink","pendant" ],
      metals: ["Gold", "Rhodium-plated Silver"],
      stones: ["Diamond", "Swarovski"],
      purity: "14K",
      priceRange: [1200, 2600],
      isExclusive: false,
      options: {
        sizes: [
          { value: "18", label: "18", available: true },
          { value: "20", label: "20", available: true, priceDelta: 100 },
          { value: "21", label: "21", available: false, priceDelta: 150 },
          { value: "22", label: "22", available: true, priceDelta: 200 },
          ],
        metals: [
          { value: "gold", label: "Gold", available: true , priceDelta: +300},
          { value: "Rhodium-plated-silver", label: "Rhodium-plated Silver", available: true, priceDelta: -200 },
        ]
      },
    },
    {
      collection: "Suit & Tie",
      gender: "men",
      categories: ["cufflink"],
      metals: ["Silver"],
      stones: ["Onyx","Swarovski"],
      purity: "22K",
      priceRange: [900, 2000],
      isExclusive: false,
    },
    {
      collection: "Yerevan",
      gender: "men",
      categories: ["pendant", "bracelet", "cufflink"],
      metals: ["Gold", "Silver", "Rhodium-plated Silver"],
      stones: ["Onyx"],
      purity: "14K",
      priceRange: [600, 1600],
      isExclusive: false,
      options: {
        sizes: [
          { value: "18", label: "18", available: true },
          { value: "20", label: "20", available: true, priceDelta: 100 },
          { value: "21", label: "21", available: true, priceDelta: 150 },
          { value: "22", label: "22", available: true, priceDelta: 200 },
          ],
        metals: [
          { value: "gold", label: "Gold", available: true , priceDelta: +300},
          { value: "rhodium-plated-silver", label: "Rhodium-plated Silver", available: true, priceDelta: -200 },
        ]
      },
    },
    {
      collection: "Snowflake",
      gender: "men",
      categories: ["ring", "bracelet", "pendant"],
      metals: ["Gold", "Leather"],
      stones: ["Diamond"],
      purity: "14K",
      priceRange: [1200, 2600],
      isExclusive: false,
      options: {
        sizes: [
          { value: "18", label: "18", available: true },
          { value: "20", label: "20", available: true, priceDelta: 100 },
          { value: "21", label: "21", available: true, priceDelta: 150 },
          { value: "22", label: "22", available: true, priceDelta: 200 },
          ],
        metals: [
          { value: "gold", label: "Gold", available: true , priceDelta: +300},
          { value: "leather", label: "Leather", available: true, priceDelta: -200 },
        ]
      },

    },
    {
      collection: "Ornament",
      gender: "men",
      categories: ["necklace", "pendant", "cufflink", "bracelet"],
      metals: ["White Gold", "Yellow Gold"],
      purity: "18K",
      priceRange: [1100, 2400],
      isExclusive: false,
      options: {
        sizes: [
          { value: "18", label: "18", available: true },
          { value: "20", label: "20", available: true, priceDelta: 100 },
          { value: "21", label: "21", available: true, priceDelta: 150 },
          { value: "22", label: "22", available: true, priceDelta: 200 },
          ],
        metals: [
          { value: "gold", label: "Yellow Gold", available: true , priceDelta: +300},
          { value: "white gold", label: "White Gold", available: true, priceDelta: -200 },
        ]
      },
    },
    {
      collection: "Exclusive & Authorship",
      gender: "unisex",
      categories: ["ring", "necklace", "pendant"],
      metals: ["Gold"],
      stones: [
        "Colombian Emerald",
        "Imperial Topaz",
        "Green Tourmaline",
        "Tanzanite",
      ],
      purity: "18K",
      priceRange: [3500, 12000],
      isExclusive: true,
    },
  ];
  

  