import type { CardInfo } from "../../components/common/ItemCard/types";
import { 
  about ,
  eng_img,
  forHerImg, 
  forHimImg,
  ring, 
  earring,
  bracelet,
  pendant,
  cufflink,
  necklace
} from "../../api/mock/products/imageRegistry";
import { bestSellers } from "../../api/mock/products/generator";

export const ABOUT_IMAGE = about;
export const ENGANGMENT_IMAGE = eng_img
export const BEST_SELLERS = bestSellers



export const GIFTING_CARDS: CardInfo[] = [
  {
    name: "menu.giftGuide.forHim",
    slug: "for-him",
    image: forHimImg,
    description: "brand.collections.anna.quote3",
    to: "/catalog/men"
  },
  {
    name: "menu.giftGuide.forHer",
    slug: "for-her",
    image: forHerImg,
    description: "brand.philosophy.emotion",
    to: "/catalog/women"
  }
];


export const CATEGORY_CARDS: CardInfo[] = [
  {
    name: "filters.category.ring",
    slug: "ring",
    image: ring,
    to: "/catalog/category/ring"
  },
  {
    name: "filters.category.necklace",
    slug: "necklace",
    image: necklace,
    to: "/catalog/category/necklace"
  },
  {
    name: "filters.category.bracelet",
    slug: "bracelet",
    image: bracelet,
    to: "/catalog/category/bracelet"
  },
  {
    name: "filters.category.earring",
    slug: "earring",
    image: earring,
    to: "/catalog/category/earring"
  },
  {
    name: "filters.category.cufflink",
    slug: "cufflink",
    gender: "male",
    image: cufflink,
    to: "/catalog/category/cufflink"
  },
  {
    name: "filters.category.pendant",
    slug: "pendant",
    image: pendant,
    to: "/catalog/category/pendant"
  }
];