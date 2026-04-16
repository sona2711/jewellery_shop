import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { ProductDetails } from "../../components/product/ProductDetails";
import type { Product } from "../../types/product";
import { ProductSlider } from "../../components/product/ProductSlider";
import { Loader } from "../../components/common/Loader";
import { SliderProductCard } from "../../components/common/SliderProductCard";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  selectAllProducts,
  selectProductsError,
  selectProductsStatus,
} from "../../redux/products";
import { NotFound } from "../NotFound";
// import styles from "./styles.module.css";

export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();

  const products = useAppSelector(selectAllProducts);
  const status = useAppSelector(selectProductsStatus);
  const error = useAppSelector(selectProductsError);

  const product = products.find((p) => p.id.toString() === id);
  const similarProducts = product?.similarProducts;
  const { t } = useTranslation();

  const similarArray = useMemo(() => {
    if (!similarProducts?.length) return [];
    return products.filter((item) =>
      similarProducts.includes(item.id.toString()),
    );
  }, [products, similarProducts]);

  // Handle loading state
  if (status === "loading") {
    return <Loader size="large" />;
  }

  // Handle error state
  if (status === "failed") {
    console.log(error);
    return <NotFound />;
  }

  return (
    <>
      {product && <ProductDetails product={product} />}

      <ProductSlider
        titleKey={t("common.youMayAlsoLike")}
        items={similarArray}
        renderItem={(items: Product) => <SliderProductCard product={items} />}
        showArrows={true}
      />
    </>
  );
};
