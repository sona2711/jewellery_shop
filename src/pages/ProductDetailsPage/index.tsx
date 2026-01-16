import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { ProductDetails } from "../../components/product/ProductDetails";
import { PRODUCT_LIST } from "../Catalog/const";
import { ProductSlider }  from "../../components/product/ProductSlider";
import styles from "./styles.module.css";

export const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string}>();
  const product = PRODUCT_LIST.find((p) => p.id.toString() === id);

  const similarProducts = product?.similarProducts;

  const similarArray = useMemo(() => {
    if (!similarProducts?.length) return [];

    return PRODUCT_LIST.filter((item) =>
      similarProducts.includes(item.id.toString())
    );
  }, [similarProducts]);

  if (!similarArray.length) return null;
  if (!product) {
    return <div className={styles.container}>
        <h1>Product not found</h1>
      </div>;
  }

  return (
        <div>
          <ProductDetails product={product} />
          <ProductSlider  titleKey="You May Also Like" products ={similarArray}/>
        </div>
      );
};
