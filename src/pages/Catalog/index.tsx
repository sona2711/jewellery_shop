import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "antd";

import type { Product } from "../../types/product";
import { fetchProducts } from "../../services/product.service";
import { ProductList } from "../../components/product/ProductList";
import { Filters } from "../../components/common/FiltersPanel";
import { MobileFilters } from "../../components/common/MobileFilters";
import { AppSort } from "../../components/common/SortPanel";
import { SORT_OPTIONS } from "../../components/common/SortPanel/const";
import type { FilterValues } from "../../components/common/FiltersPanel/types";
import { Loader } from "../../components/common/Loader";
import styles from "./styles.module.css";


const { useBreakpoint } = Grid;


export const Catalog = () => {
  const { gender, category, collectionSlug } = useParams<{
    gender?: string;
    category?: string;
    collectionSlug?: string;
  }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortValue, setSortValue] = useState<string | undefined>();
  const [filters, setFilters] = useState<FilterValues | undefined>();
  
  const filteredProducts = useMemo(() => {
    let  result = [...products];

    if (collectionSlug) {
      result = result.filter((p) => p.collectionSlug === collectionSlug);
  
    } else if (gender && category) {
      result = result.filter(
        (p) => p.gender === gender && p.category?.includes(category)
      );
    }
  
  
    return result;
  }, [products, collectionSlug, gender, category]
  )

  const screens = useBreakpoint();
  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);



  return (
    <div className={styles.container}>
      <div className={styles.filters_wrapper}>
      {screens.md ? (
        <Filters value={filters} onChange={setFilters} />
      ) : (
        <MobileFilters value={filters} onChange={setFilters}/>
        )}
        <AppSort
          options={SORT_OPTIONS}
          value={sortValue}
          onChange={setSortValue}
          placeholderKey="sort.placeholder"
        />
      </div>
      <div className={styles.products_wrapper}>
        {loading && <Loader size={"large"} />}

        <ProductList items={filteredProducts} />
      </div>
    </div>
  );
};

// add infinite scroll
