import { ProductList } from "../../components/product/ProductList";
import { PRODUCT_LIST } from "./const";
// import { useTranslation } from "react-i18next";

export const Catalog  = () => {
    // const{ t, i18n }= useTranslation()
   
    return (
            <div className="style.container">
                {/* <Filter/> */}
                <ProductList  items = {PRODUCT_LIST}/>
            </div>
    )
}