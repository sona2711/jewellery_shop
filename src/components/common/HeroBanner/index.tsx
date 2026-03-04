import { useEffect, useRef, useState } from "react";
import { Flex, Typography, Button } from "antd";
import { PauseOutlined, CaretRightOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

import { HERO_SLIDES } from "./const";
import { useHeroRotation } from "../../../hooks/useHeroRotation";
import {
  prefersReducedMotion,
  isMobileDevice,
  createVideoObserver,
} from "./utils";

import type { HeroVideoSectionProps } from "./types";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

export const HeroSection = ({ onCtaClick }: HeroVideoSectionProps) => {
  const { t } = useTranslation();

  const reduceMotion = prefersReducedMotion();
  const isMobile = isMobileDevice();

  const [isPaused, setIsPaused] = useState(false);
  const canAnimate = !reduceMotion && !isPaused && !isMobile;

  const activeIndex = useHeroRotation(
    HERO_SLIDES.length,
    8000,
    canAnimate
  );

  const activeSlide = HERO_SLIDES[activeIndex];

  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current || !sectionRef.current) return;

    const observer = createVideoObserver(videoRef.current);
    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [activeIndex]);

  useEffect(() => {
    if (!videoRef.current) return;
  
    if (isPaused) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {});
    }
  }, [isPaused]);

  return (
    <section ref={sectionRef} className={styles.hero_section} aria-label="Hero">
      {HERO_SLIDES.map((slide, index) => (
        <video
          key={`${index}${slide.video}`}
          ref={index === activeIndex ? videoRef : null}
          className={`${styles.hero_video} ${
            index === activeIndex ? styles.active : styles.hidden
          }`}
          src={slide.video}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden={index !== activeIndex}
        />
      ))}

      {/* Overlay Content */}
      <Flex
        vertical
        justify="center"
        align="center"
        className={styles.content_wrapper}
      >
        <Title level={1} className={styles.hero_title}>
          {t(activeSlide.titleKey)}
        </Title>

        <Paragraph className={styles.hero_subtext}>
          {t(activeSlide.subtitleKey)}
        </Paragraph>

          <Button
            type="primary"
            size="large"
            onClick={onCtaClick}
          >
            <Link to={activeSlide.linkTo}> 
                {t("common.viewCollection")}
            </Link>
          </Button>
      </Flex>
      {!reduceMotion && !isMobile && (
            <Button
              type="text"
              className={styles.motion_toggle}
              aria-label={isPaused ? "Play video" : "Pause video"}
              onClick={() => setIsPaused((p) => !p)}
              icon={
                isPaused ? <CaretRightOutlined /> : <PauseOutlined />
              }
            />
          )}
    </section>
  );
};