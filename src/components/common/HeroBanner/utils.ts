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

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isMobileDevice() {
  return window.matchMedia("(max-width: 768px)").matches;
}

export function createVideoObserver(video: HTMLVideoElement) {
  return new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    },
    { threshold: 0.4 }
  );
}