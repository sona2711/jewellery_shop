import { COLLECTIONS } from "../../api/mock/products/const"
import type { CollectionConfig } from "../../api/mock/products/types"
import { CollectionCard } from "../../components/common/CollectionCard"
import { ProductSlider } from "../../components/product/ProductSlider"

export const Home = () => {
    return (
        <>
            <ProductSlider  
            titleKey="Explore Collections" 
            items ={COLLECTIONS} 
            renderItem= {(collection: CollectionConfig)=> <CollectionCard collection={collection} width={300}/>} 
            showArrows={true}/>
        </>
    )
}