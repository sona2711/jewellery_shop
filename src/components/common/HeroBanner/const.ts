import {  HERO_VIDEOS } from "../../../api/mock/products/imageRegistry";

export const HERO_VIDEOS_BY_LOCALE = {
    en: "/videos/hero-en.mp4",
    hy: "/videos/hero-hy.mp4",
    ru: "/videos/hero-ru.mp4",
} as const;


export const HERO_SLIDES = [
    {
      video: HERO_VIDEOS.men,
      titleKey: "brand.slogans.rules",
      subtitleKey: "brand.collections.father.quote",
      linkTo:"/catalog/sparks",
    },
    {
      video: HERO_VIDEOS.women1,
      titleKey: "brand.philosophy.elegance",
      subtitleKey: "brand.collections.anna.quote1",
      linkTo:"/catalog/anna",
    },
    {
      video: HERO_VIDEOS.women2,
      titleKey: "brand.philosophy.emotion",
      subtitleKey: "brand.collections.anna.quote2",
      linkTo:"/catalog/anna",
    },
  ];
  
export const MOBILE_BREAKPOINT = 768;