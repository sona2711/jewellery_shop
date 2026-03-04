import { useTranslation } from "react-i18next";

import { COLLECTION_CARDS } from "../../api/mock/products/const";
import type { CardInfo } from "../../components/common/ItemCard/types";
import type { Product } from "../../types/product";
import { ItemCard } from "../../components/common/ItemCard";
import { HeroSection } from "../../components/common/HeroBanner";
import { ProductSlider } from "../../components/product/ProductSlider";
import { Advantages } from "../../components/common/Advantages";
import { ImageText } from "../../components/common/ImageTextSection";
import { SliderProductCard } from "../../components/common/SliderProductCard";
import { TwoColumnSection } from "../../components/common/TwoColumnSection";
import {
  ABOUT_IMAGE,
  BEST_SELLERS,
  ENGANGMENT_IMAGE,
  GIFTING_CARDS,
} from "./const";
// import styles from "./styles.module.css";

export const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeroSection />
      <ProductSlider
        titleKey={t("common.collections")}
        items={COLLECTION_CARDS}
        renderItem={(cardInfo: CardInfo) => (
          <ItemCard cardInfo={cardInfo} width={300} />
        )}
        showArrows={true}
      />
      <TwoColumnSection
        title="brand.slogans.gift"
        cards={[
          <ItemCard cardInfo={GIFTING_CARDS[0]} width={480} />,
          <ItemCard cardInfo={GIFTING_CARDS[1]} width={480} />,
        ]}
      />
       <ProductSlider
        titleKey={t("common.bestSellers")}
        items={BEST_SELLERS}
        renderItem={(product: Product) => (
          <SliderProductCard product={product} />
        )}
        showArrows={true}
      />

      <ImageText
        image={ENGANGMENT_IMAGE}
        titleKey="brand.collections.engagementRings.title"
        descriptionKey="brand.collections.engagementRings.description"
        buttonTextKey="common.explore"
        linkTo="/catalog/women/wedding-ring"
        imagePosition="left"
      />
     
      <ImageText
        image={ABOUT_IMAGE}
        titleKey="home.aboutPreview.title"
        descriptionKey="home.aboutPreview.description"
        buttonTextKey="common.explore"
        linkTo="/about"
        imagePosition="right"
      />
      <Advantages />
    </>
  );
};
