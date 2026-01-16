import { useState } from "react";
import { ProductList } from "../../components/product/ProductList";
import { PRODUCT_LIST } from "./const";
import { SORT_OPTIONS } from "../../components/common/SortPanel/const";
import { Filters } from "../../components/common/FiltersPanel";
import { AppSort } from "../../components/common/SortPanel";
import type { FilterValues } from "../../components/common/FiltersPanel/types";
import styles from "./styles.module.css";
// import { ProductDetails } from "../../components/product/ProductDetails";

export const Catalog = () => {
  const [sortValue, setSortValue] = useState<string | undefined>();
  const [filters, setFilters] = useState<FilterValues | undefined>();

  return (
    <div className={styles.container}>
      <div className={styles.filters_wrapper}>
        <Filters value={filters} onChange={setFilters} />
        <AppSort
          options={SORT_OPTIONS}
          value={sortValue}
          onChange={setSortValue}
          placeholderKey="sort.placeholder"
        />
      </div>
      <ProductList items={PRODUCT_LIST} />
      {/* <ProductDetails product={PRODUCT_LIST[0]}/> */}
    </div>
  );
};

// add infinite scroll
