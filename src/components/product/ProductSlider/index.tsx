import { useRef, useState, useEffect } from "react";
import { Button, Flex , Typography} from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import type { ProductSliderProps } from "./types";
import styles from "./styles.module.css";


const {Title} = Typography;


export const ProductSlider = <T,>({
  titleKey = '',
  items,
  renderItem,
  showArrows = false,
}: ProductSliderProps<T>) => {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkArrows = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1); 
  };

  useEffect(() => {
    if (!showArrows) return;
    checkArrows();
    const ref = scrollRef.current;
    ref?.addEventListener("scroll", checkArrows);
    window.addEventListener("resize", checkArrows);
    return () => {
      ref?.removeEventListener("scroll", checkArrows);
      window.removeEventListener("resize", checkArrows);
    };
  }, [showArrows, items]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector(`.${styles.card}`) as HTMLElement;
    const cardWidth = card?.offsetWidth || 200;
    const gap = 16;
    const scrollAmount = direction === "left" ? -(cardWidth + gap) : cardWidth + gap;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  if (!items.length) return null;

  return (
    <section className={styles.container}>
      <Flex justify="space-between" align="center">
        <Title level={2}>{t(titleKey)}</Title>
        {showArrows && (
          <div>
            <Button
              type="text"
              onClick={() => scroll("left")}
              disabled={!showLeftArrow}
              aria-label="Previous"
            >
              <LeftOutlined />
            </Button>
            <Button
              type="text"
              onClick={() => scroll("right")}
              disabled={!showRightArrow}
              aria-label="Next"
            >
              <RightOutlined />
            </Button>
          </div>
        )}
      </Flex>

      <div className={styles.slider} ref={scrollRef}>
        {items.map((item:T, index: number) => (
          <div key={index} className={styles.card}>
            {renderItem(item)}
          </div>
        ))}
      </div>
    </section>
  );
};