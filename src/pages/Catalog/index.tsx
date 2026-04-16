import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector"
import { 
  fetchProducts, 
  selectAllProducts, 
  selectProductsStatus,
  selectProductsError 
} from "../../redux/products";
import { Grid } from "antd";
import { ProductList } from "../../components/product/ProductList";
import { Filters } from "../../components/common/FiltersPanel";
import { MobileFilters } from "../../components/common/MobileFilters";
import { AppSort } from "../../components/common/SortPanel";
import { SORT_OPTIONS } from "../../components/common/SortPanel/const";
import { ProductBanner } from "../../components/product/ProductBanner";
import { Loader } from "../../components/common/Loader";
// import type { Product } from "../../types/product";
import type { FilterValues } from "../../components/common/FiltersPanel/types";
import styles from "./styles.module.css";
import { NotFound } from "../NotFound";

const { useBreakpoint } = Grid;

export const Catalog = () => {
  const { gender, category, collectionSlug } = useParams();
  
  const [sortValue, setSortValue] = useState<string | undefined>();
  const [filters, setFilters] = useState<FilterValues | undefined>();

  const dispatch = useAppDispatch();
  const products = useAppSelector(selectAllProducts);
  const status = useAppSelector(selectProductsStatus);
  const error = useAppSelector(selectProductsError);
  const screens = useBreakpoint();
  
 
  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (collectionSlug) {
      result = result.filter((p) => p.collectionSlug === collectionSlug);
    } else if (gender && category) {
      result = result.filter(
        (p) => p.gender === gender && p.category?.includes(category)
      );
    } else if (gender) {
      result = result.filter((p) => p.gender === gender);
    } else if (category) {
      result = result.filter((p) => p.category?.includes(category));
    }

  
    // if (filters?.price) {
    //   result = result.filter(
    //     (p) => p.price >= filters?.price[0] && p.price <= filters?.price[1]
    //   );
    // }

    if (filters?.category) {
      result = result.filter((p) => filters.category === p.category);
    }

    if (filters?.metal) {
      result = result.filter((p) => {
      console.log(filters.metal, p.attributes?.metal, filters.metal === p.attributes?.metal)
    });
      console.log(result)
    }
    if (filters?.stone) {
      result = result.filter((p) => filters.stone?.toLocaleLowerCase() === p.attributes?.stone?.toLowerCase());
    }

     if (filters?.availability) {
      result = result.filter((p) => p.availability === filters.availability);
    }
    
    // Apply sorting
    if (sortValue === "price_asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortValue === "price_desc") {
      result.sort((a, b) => b.price - a.price);
    } 
    return result;
  }, [products, collectionSlug, gender, category, filters, sortValue]);


  const coverText = useMemo(() => {
    if (gender && category) return `${gender.toUpperCase()}'S ${category.toUpperCase()}`;
    if (gender) return `${gender.toUpperCase()}'S`;
    if (category) return `${category.toUpperCase()}`;
    if (collectionSlug) return `${collectionSlug.toUpperCase()} COLLECTION`;
    return "CATALOG";
  }, [gender, category, collectionSlug]);

   // Fetch products on mount
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  // Handle loading state
  if (status === "loading") {
    return <Loader size="large" />;
  }

  // Handle error state
  if (status === "failed") {
    console.log(error)
    return (
      <NotFound/>
    );
  }


  return (
    <>
      <ProductBanner coverText={coverText} gender={gender ?? ""} />
      <section className={styles.filters_wrapper}>
        {screens.md ? (
          <Filters value={filters} onChange={setFilters} />
        ) : (
          <MobileFilters value={filters} onChange={setFilters} />
        )}
        <AppSort
          options={SORT_OPTIONS}
          value={sortValue}
          onChange={setSortValue}
          placeholderKey="sort.placeholder"
        />
      </section>
      <ProductList items={filteredProducts} />
    </>
  );
};
