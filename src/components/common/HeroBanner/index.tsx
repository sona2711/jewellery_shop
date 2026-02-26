import { Flex, Typography, Button } from "antd";
import { useTranslation } from "react-i18next";
import { isMobileDevice, prefersReducedMotion } from "./utils";//   getHeroVideoByLocale,
// import { HERO_VIDEOS_BY_LOCALE } from "./const"; 
import {  HERO_VIDEOS } from "../../../api/mock/products/imageRegistry"; //HERO_MOBILE_IMAGE,
import type { HeroVideoSectionProps } from "./types";
import styles from "./styles.module.css";

const { Title, Paragraph } = Typography;

export const HeroSection = ({onCtaClick}: HeroVideoSectionProps) => {
    const { t, } = useTranslation(); //i18n 
    const isMobile = isMobileDevice();
    const reduceMotion = prefersReducedMotion();
//  const videoSrc = getHeroVideoByLocale(i18n.language);
    const videos : string[] = Object.values(HERO_VIDEOS);

  return (
    <section className={styles.hero_section}>
      {/* Background */}
      {isMobile || reduceMotion ? (
        <video
        className={styles.hero_video}
        src={videos[0]}
        autoPlay
        muted
        loop
        playsInline
        aria-label={t("hero.videoAria")}
        />
        
      ) : (
        videos.map((videoSrc:string , index:number) => (
               <video key={index}
                className={styles.hero_video}
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                aria-label={t("hero.videoAria")}
                />
            ))
        
      )}

      {/* Overlay + Content */}
      <Flex
        vertical
        justify="center"
        align="center"
        className={styles.content_wrapper}
      >
        <Title
          level={1}
          className={styles.hero_title}
        >
          {t("brand.slogans.progress")}
        </Title>

        <Paragraph className={styles.hero_subtext}>
          {t("brand.collections.anna.quote1")}
        </Paragraph>

        <Button
          type="primary"
          size="large"
          aria-label={t("hero.ctaAria")}
          onClick={onCtaClick}
        >
          {t("common.viewCollection")}
        </Button>
      </Flex>
    </section>
  );
};


{/* <img
    src={HERO_MOBILE_IMAGE.men}
    alt={t("hero.videoAria")}
    className={styles.hero_image}  
/> */}