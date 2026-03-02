import { useTranslation } from "react-i18next";
import { COLLECTIONS } from "../../api/mock/products/const"
import type { CollectionConfig } from "../../api/mock/products/types"
import { CollectionCard } from "../../components/common/CollectionCard"
import { HeroSection } from "../../components/common/HeroBanner"
import { ProductSlider } from "../../components/product/ProductSlider"
import { Advantages } from "../../components/common/Advantages";
import { ImageText } from "../../components/common/ImageTextSection";
import { ABOUT_IMAGE } from "./const";

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
            
            <Advantages/>

        </>
    )
}