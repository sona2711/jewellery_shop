import type { CardInfo } from "../../components/common/ItemCard/types";
import { about , eng_img, forHerImg, forHimImg} from "../../api/mock/products/imageRegistry";
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
]