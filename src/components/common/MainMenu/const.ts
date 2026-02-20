import type { MenuKey} from "./types";
import women from "../../../assets/images/banner/banner-her.jpg";
import men from "../../../assets/images/banner/banner-men.jpg";
import yerevan from "../../../assets/images/banner/yerevan-collection.jpg";
import exclusive from "../../../assets/images/banner/sketch_yerevan.jpg";
import giftbox from "../../../assets/images/service/gifting1.jpg";
import kassamanWorld from "../../../assets/images/service/service4.jpg";

export const TOP_MENU: { key: MenuKey; labelKey: string }[] = [
  { key: "women", labelKey: "menu.labels.women" },
  { key: "men", labelKey: "menu.labels.men" },
  { key: "collections", labelKey: "menu.labels.collections" },
  { key: "exclusive", labelKey: "menu.labels.exclusive" },
  { key: "giftGuide", labelKey: "menu.labels.giftGuide" },
  { key: "world", labelKey: "menu.labels.world" },
  { key: "contact", labelKey: "menu.labels.contact" },
];


export const COLLECTION_SLUGS = {
  women: "women",
  men: "men",
  bracelets: "bracelets",
  rings: "rings",
  necklaces: "necklaces",
  earrings: "earrings",
  kassamanWorld: "kassaman-world",
  exclusive: "exclusive",
};

export const MENU_IMAGES: Partial<Record<MenuKey, string>> = {
  women: women,
  men: men,
  collections: yerevan,
  exclusive: exclusive,
  giftGuide: giftbox,
  world: kassamanWorld,
};





