import { useTranslation } from "react-i18next";
import { COLLECTIONS } from "../../api/mock/products/const"
import type { CollectionConfig } from "../../api/mock/products/types"
import { CollectionCard } from "../../components/common/CollectionCard"
import { HeroSection } from "../../components/common/HeroBanner"
import { ProductSlider } from "../../components/product/ProductSlider"

export const Home = () => {
    const {t} = useTranslation();
    return (
        <>
            <HeroSection/>
            <ProductSlider  
            titleKey={t("common.collections")} 
            items ={COLLECTIONS} 
            renderItem= {(collection: CollectionConfig)=> <CollectionCard collection={collection} width={300}/>} 
            showArrows={true}/>
        </>
    )
}