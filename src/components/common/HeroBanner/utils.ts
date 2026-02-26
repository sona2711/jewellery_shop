import { HERO_VIDEOS_BY_LOCALE } from "./const";

export const getHeroVideoByLocale = (
  locale: string
): string => {
  return (
    HERO_VIDEOS_BY_LOCALE[
      locale as keyof typeof HERO_VIDEOS_BY_LOCALE
    ] || HERO_VIDEOS_BY_LOCALE.en
  );
};

export const isMobileDevice = (): boolean =>
  window.innerWidth < 768;

export const prefersReducedMotion = (): boolean =>
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;