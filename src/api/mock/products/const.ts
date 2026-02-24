import type { CollectionConfig } from "./types";
import anna from '../../../assets/images/products/anna/earing/anna-white-gold-sri-lanka-sapphires-earing1_1.jpg';
import theFather from '../../../assets/images/products/thefather/ring/rodium-silver-swarovski-ring1_1.jpg';
import signature from '../../../assets/images/products/signature/necklace/silver-necklace.jpg';
import alpha from '../../../assets/images/products/alpha/cufflink/cufflink-gold1.jpg';
import sparks from '../../../assets/images/products/sparks/bracelet/silver-bracelet-black-stones1_1.jpg';
import suitAndTie from '../../../assets/images/products/suit&tie/cufflink/silver-rose-gold-sadaf-cufflink1_1.jpg';
import snowFlake from '../../../assets/images/products/snowflake/ring/ring-silver-swarovski.jpg';
import ornament from '../../../assets/images/products/ornament/pendant/pendant-cross1_2.jpg';
import yerevan from '../../../assets/images/products/yerevan/pendant/gold-pendant-princesscut1_1.jpg';
import exclusive from '../../../assets/images/banner/sketch_yerevan.jpg';



export const COLLECTIONS: CollectionConfig[] = [
    {
      collection: "Anna",
      slug:"anna",
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
      images: [anna],
    },
    {
      collection: "The Father",
      slug:"the-father",
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
      images: [ theFather]
    },
    {
      collection: "Signature",
      slug:"signature",
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
      images: [signature]
    },
    {
      collection: "Alpha",
      slug: "alpha",
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
      images: [alpha]
    },
    {
      collection: "Sparks",
      slug: "sparks",
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
      images: [sparks]
    },
    {
      collection: "Suit & Tie",
      slug:"suit-and-tie",
      gender: "men",
      categories: ["cufflink"],
      metals: ["Silver"],
      stones: ["Onyx","Swarovski"],
      purity: "22K",
      priceRange: [900, 2000],
      isExclusive: false,
      images: [suitAndTie]
    },
    {
      collection: "Yerevan",
      slug:"yerevan",
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
      images: [yerevan]
    },
    {
      collection: "Snowflake",
      slug: "snowflake",
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
      images: [snowFlake]
    },
    {
      collection: "Ornament",
      slug: "ornament",
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
      images: [ornament]
    },
    {
      collection: "Exclusive & Authorship",
      slug: "exclusive-and-authorship",
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
      images: [exclusive]
    },
  ];
  

  