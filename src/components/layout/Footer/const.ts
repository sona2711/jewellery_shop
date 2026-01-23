import type { FooterColumnProps } from "../../common/FooterColumn/types";

  export const FOOTER_SECTIONS :  FooterColumnProps[] = [{
    title: "footer.shop",
    links: [
      { label: "footer.links.rings", href: "/rings" },
      { label: "footer.links.bracelets", href: "/bracelets" },
      { label: "footer.links.necklaces", href: "/necklaces" },
      { label: "footer.links.earrings", href: "/earrings" },
      { label: "footer.links.mens_collection", href: "/mens" },
    ],
  },
  {
    title: "footer.customer_service",
    links: [
      { label: "footer.links.shipping", href: "/shipping" },
      { label: "footer.links.returns", href: "/returns" },
      { label: "footer.links.warranty", href: "/warranty" },
      { label: "footer.links.track_order", href: "/track-order" },
    ],
  },
  {
    title: "footer.about_us",
    links: [
      { label: "footer.links.our_story", href: "/about" },
      { label: "footer.links.craftsmanship", href: "/craftsmanship" },
      { label: "footer.links.stores", href: "/stores" },
      { label: "footer.links.careers", href: "/careers" },
    ],
  },
  {
    title: "footer.help",
    links: [
      { label: "footer.links.faq", href: "/faq" },
      { label: "footer.links.privacy", href: "/privacy" },
      { label: "footer.links.terms", href: "/terms" },
      { label: "footer.links.contact", href: "/contact" },
    ],
  },
];


export const FOOTER_TEXT:string = "Constant progress is at the heart of Kassaman's philosophy. and staying true to it is a core principle."
