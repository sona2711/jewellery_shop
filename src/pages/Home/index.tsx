import { useTranslation } from "react-i18next";

import { COLLECTIONS } from "../../api/mock/products/const";
import type { CollectionConfig } from "../../api/mock/products/types";
import type { Product } from "../../types/product";
import { CollectionCard } from "../../components/common/CollectionCard";
import { HeroSection } from "../../components/common/HeroBanner";
import { ProductSlider } from "../../components/product/ProductSlider";
import { Advantages } from "../../components/common/Advantages";
import { ImageText } from "../../components/common/ImageTextSection";
import { ABOUT_IMAGE, BEST_SELLERS, ENGANGMENT_IMAGE } from "./const";
import { SliderProductCard } from "../../components/common/SliderProductCard";

export const Home = () => {
    const {t} = useTranslation();
    return (
        <>
            <HeroSection/>
            <ProductSlider  
            titleKey={t("common.collections")} 
            items ={COLLECTIONS} 
            renderItem= {(collection: CollectionConfig)=> <CollectionCard collection={collection} width={300}/>} 
            showArrows={true}
            />
            <ImageText 
            image={ABOUT_IMAGE} 
            titleKey="home.aboutPreview.title" 
            descriptionKey="home.aboutPreview.description" 
            buttonTextKey="common.explore"
            linkTo="/about" 
            imagePosition="right"
            />
            <ProductSlider  
            titleKey={t("common.bestSellers")} 
            items ={BEST_SELLERS} 
            renderItem= {(product:Product)=> <SliderProductCard product={product}/>} 
            showArrows={true}
            />
            <ImageText 
            image={ENGANGMENT_IMAGE} 
            titleKey="brand.collections.engagementRings.title" 
            descriptionKey="brand.collections.engagementRings.description" 
            buttonTextKey="common.explore"
            linkTo="/catalog/anna" 
            imagePosition="left"
            />
            <Advantages/>

        </>
    )
}