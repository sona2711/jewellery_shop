import { useEffect, useState } from "react";

export function useHeroRotation(
  length: number,
  delay: number,
  canAnimate: boolean
) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!canAnimate) return;

    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % length);
    }, delay);

    return () => clearInterval(id);
  }, [length, delay, canAnimate]);

  return activeIndex;
}