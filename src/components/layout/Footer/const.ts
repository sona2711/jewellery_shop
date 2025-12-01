import type { FooterColumnProps } from "../../common/FooterColumn/types";

export const FOOTER_SECTIONS: FooterColumnProps[] = [
    {
      title: "Shop",
      links: [
        { label: "Rings", href: "/rings" },
        { label: "Bracelets", href: "/bracelets" },
        { label: "Necklaces", href: "/necklaces" },
        { label: "Earrings", href: "/earrings" },
        { label: "Men’s Collection", href: "/mens" },
      ],
    },
    {
      title: "Customer Service",
      links: [
        { label: "Shipping", href: "/shipping" },
        { label: "Returns", href: "/returns" },
        { label: "Warranty", href: "/warranty" },
        { label: "Track Order", href: "/track-order" },
      ],
    },
    {
      title: "About Us",
      links: [
        { label: "Our Story", href: "/about" },
        { label: "Craftsmanship", href: "/craftsmanship" },
        { label: "Stores", href: "/stores" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Help",
      links: [
        { label: "FAQ", href: "/faq" },
        { label: "Contact Us", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms & Conditions", href: "/terms" },
      ],
    },
  ];

