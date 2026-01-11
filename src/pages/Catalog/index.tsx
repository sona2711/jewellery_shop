import { useState } from "react";
import { ProductList } from "../../components/product/ProductList";
import { PRODUCT_LIST } from "./const";
import { SORT_OPTIONS } from "../../components/common/SortPanel/const";
import { Filters} from "../../components/common/FiltersPanel";
import { AppSort } from "../../components/common/SortPanel";
import { ProductPage } from "../Product";
import styles from "./styles.module.css";
import { ProductDetails } from "../../components/product/ProductDetails";


export const Catalog  = () => {
    const [ sortValue, setSortValue] = useState<string|undefined>();
    

    return (
            <div className={styles.container}>
                <div className={styles.filters_wrapper}>
                    <Filters value={undefined} onChange={()=> {}}/>
                    <AppSort
                        options={SORT_OPTIONS}
                        value={sortValue}
                        onChange={setSortValue}
                        placeholderKey="sort.placeholder"
                    />
                </div>
                <ProductList items={PRODUCT_LIST} />
                <ProductPage />
                <ProductDetails product={PRODUCT_LIST[0]} onBook={()=> {}}/>
            </div>
    )
}

// add infinite scroll