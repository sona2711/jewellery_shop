import { useState, useEffect } from "react";
import { fetchProducts } from "../../services/product.service";
import { ProductList } from "../../components/product/ProductList";
import { SORT_OPTIONS } from "../../components/common/SortPanel/const";
import { Filters } from "../../components/common/FiltersPanel";
import { AppSort } from "../../components/common/SortPanel";
import { Loader } from "../../components/common/Loader";
import type { Product } from "../../types/product";
import type { FilterValues } from "../../components/common/FiltersPanel/types";
import styles from "./styles.module.css";

export const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

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
      <div className={styles.products_wrapper}>
        {loading && <Loader size={"large"} />}

        <ProductList items={products} />
      </div>
    </div>
  );
};

// add infinite scroll
