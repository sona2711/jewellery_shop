import type { FooterColumnProps } from "../../common/FooterColumn/types";
import { SocialMedia } from "../../common/SocialMedia";

export const FOOTER_SECTIONS: FooterColumnProps[] = [
  {
    title: "footer.company",
    links: [
      { label: "footer.links.story", href: "/about" },
      { label: "footer.links.blog", href: "/blog" },
      { label: "footer.links.services", href: "/service" },
      { label: "footer.links.store", href: "/store" },
      { label: "footer.links.careers", href: "/careers" },
    ],
  },
  {
    title: "footer.support",
    links: [
      { label: "footer.links.shipping", href: "/shipping" },
      { label: "footer.links.returns", href: "/returns" },
      { label: "footer.links.warranty", href: "/warranty" },
      { label: "footer.links.track", href: "/track-order" },
    ],
  },
  {
    title: "footer.legal",
    links: [
      { label: "footer.links.contact", href: "/contact" },
      { label: "footer.links.privacy", href: "/privacy" },
      { label: "footer.links.terms", href: "/terms" },
      { label: "footer.links.faq", href: "/faq" },
    ],
  },
  {
    title: "footer.social",
    links: [
      { label: "footer.links.facebook", href: "https://www.facebook.com/p/Kassaman-100063686071188/",},
      { label: "footer.links.instagram", href: "https://www.instagram.com/kassaman_armenia/"},
      {label: "footer.links.telegram", href: "https://t.me"},
      {label: "footer.links.whatsapp", href: "https://wa.me"},
    ],
    component: SocialMedia
  },
];

export const FOOTER_TEXT: string = "Constant progress is at the heart of Kassaman's philosophy. and staying true to it is a core principle.";