import type { MenuKey} from "./types";


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
  women: "/images/mega/women.jpg",
  men: "/images/mega/men.jpg",
  collections: "/images/mega/collections.jpg",
  exclusive: "/images/mega/exclusive.jpg",
  giftGuide: ""
};





