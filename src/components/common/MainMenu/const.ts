import type { MenuContent } from "./types";

export const MENU_CONTENT: MenuContent = {
  women: {
    key: "women",
    image: "/images/mega/women.jpg",
    sections: [
      {
        titleKey: "menu.women.rings",
        links: [
          { key: "wr1", labelKey: "menu.women.rings", to: "/women/rings" },
          { key: "wr2", labelKey: "menu.rings.engagement", to: "/women/rings/engagement" },
          { key: "wr3", labelKey: "menu.rings.weddingBands", to: "/women/rings/wedding" }
        ]
      },
      {
        titleKey: "menu.women.bracelets",
        links: [
          { key: "wb1", labelKey: "menu.women.bracelets", to: "/women/bracelets" },
          { key: "wb2", labelKey: "menu.bracelets.goldBracelets", to: "/women/bracelets/gold" },
          { key: "wb3", labelKey: "menu.bracelets.diamondBracelets", to: "/women/bracelets/diamond" }
        ]
      },
      {
        titleKey: "menu.women.necklaces",
        links: [
          { key: "wn1", labelKey: "menu.women.necklaces", to: "/women/necklaces" },
          { key: "wn2", labelKey: "menu.necklaces.goldNecklaces", to: "/women/necklaces/gold" },
          { key: "wn3", labelKey: "menu.necklaces.diamondNecklaces", to: "/women/necklaces/diamond" }
        ]
      },
      {
        titleKey: "menu.women.pendants",
        links: [
          { key: "wp1", labelKey: "menu.women.pendants", to: "/women/pendants" },
          { key: "wp2", labelKey: "menu.pendants.personalizedPendants", to: "/women/pendants/personalized" },
          { key: "wp3", labelKey: "menu.pendants.gemstonePendants", to: "/women/pendants/gemstone" }
        ]
      }
    ]
  },

  men: {
    key: "men",
    image: "/images/mega/men.jpg",
    sections: [
      {
        titleKey: "menu.men.cufflinks",
        links: [
          { key: "mc1", labelKey: "menu.men.cufflinks", to: "/men/cufflinks" },
          { key: "mc2", labelKey: "menu.cufflinks.classic", to: "/men/cufflinks/classic" }
        ]
      },
      {
        titleKey: "menu.men.bracelets",
        links: [
          { key: "mb1", labelKey: "menu.men.bracelets", to: "/men/bracelets" },
          { key: "mb2", labelKey: "menu.bracelets.chainBracelets", to: "/men/bracelets/chain" }
        ]
      },
      {
        titleKey: "menu.men.rings",
        links: [
          { key: "mr1", labelKey: "menu.men.rings", to: "/men/rings" },
          { key: "mr2", labelKey: "menu.rings.diamondRings", to: "/men/rings/diamond" }
        ]
      }
    ]
  },

  collection: {
    key: "collection",
    image: "/images/mega/collection.jpg",
    sections: [
      {
        titleKey: "menu.collection.novelties",
        links: [
          { key: "c1", labelKey: "menu.collection.novelties", to: "/collection/novelties" },
          { key: "c2", labelKey: "menu.collection.latestCollection", to: "/collection/latest" },
          { key: "c3", labelKey: "menu.collection.limitedEdition", to: "/collection/limited" }
        ]
      },
      {
        titleKey: "menu.collection.designerPicks",
        links: [
          { key: "c4", labelKey: "menu.collection.designerPicks", to: "/collection/designer" },
          { key: "c5", labelKey: "menu.collection.trendingNow", to: "/collection/trending" }
        ]
      }
    ]
  },

  giftGuide: {
    key: "giftGuide",
    image: "/images/mega/gifts.jpg",
    sections: [
      {
        titleKey: "menu.giftGuide.trendingGifts",
        links: [
          { key: "g1", labelKey: "menu.giftGuide.trendingGifts", to: "/gifts/trending" },
          { key: "g2", labelKey: "menu.giftGuide.jewelryGifts", to: "/gifts/jewelry" }
        ]
      },
      {
        titleKey: "menu.giftGuide.personalizedGifts",
        links: [
          { key: "g3", labelKey: "menu.giftGuide.personalizedGifts", to: "/gifts/personalized" },
          { key: "g4", labelKey: "menu.giftGuide.luxuryGifts", to: "/gifts/luxury" }
        ]
      }
    ]
  },

  kassamanWorld: {
    key: "kassamanWorld",
    image: "/images/mega/kassaman.jpg",
    sections: [
      {
        titleKey: "menu.kassamanWorld.ourStory",
        links: [
          { key: "k1", labelKey: "menu.kassamanWorld.ourStory", to: "/about/story" },
          { key: "k2", labelKey: "menu.kassamanWorld.craftsmanship", to: "/about/craftsmanship" }
        ]
      },
      {
        titleKey: "menu.kassamanWorld.materials",
        links: [
          { key: "k3", labelKey: "menu.kassamanWorld.materials", to: "/about/materials" },
          { key: "k4", labelKey: "menu.kassamanWorld.sustainability", to: "/about/sustainability" }
        ]
      }
    ]
  },

  contactUs: {
    key: "contactUs",
    image: "",
    sections: [
      {
        titleKey: "menu.contact.emailUs",
        links: [
          { key: "ct1", labelKey: "menu.contact.emailUs", to: "/contact/email" },
          { key: "ct2", labelKey: "menu.contact.phone", to: "/contact/phone" }
        ]
      },
      {
        titleKey: "menu.contact.storeLocations",
        links: [
          { key: "ct3", labelKey: "menu.contact.storeLocations", to: "/contact/stores" },
          { key: "ct4", labelKey: "menu.contact.faq", to: "/contact/faq" }
        ]
      }
    ]
  }
};
