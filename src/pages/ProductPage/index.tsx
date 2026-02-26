import { useMemo , useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { fetchProducts } from "../../services/product.service";
import { ProductDetails } from "../../components/product/ProductDetails";
import type { Product } from "../../types/product";
import { ProductSlider }  from "../../components/product/ProductSlider";
import { Loader } from "../../components/common/Loader";
import { SliderProductCard } from "../../components/common/SliderProductCard";
import styles from "./styles.module.css";
// import { Flex } from "antd";

export const ProductPage = () => {
  const { id } = useParams<{ id: string}>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  const product = products.find((p) => p.id.toString() === id);
  const similarProducts = product?.similarProducts;
  const {t} = useTranslation();

  const similarArray = useMemo(() => {
    if (!similarProducts?.length) return [];
    return products.filter((item) =>
      similarProducts.includes(item.id.toString())
    );
  }, [products, similarProducts]);

 
  return (
        <section className={styles.container} aria-label="pdp"> 
          {loading && 
              <Loader size={"large"}/>
          }
          {product &&  <ProductDetails product={product} />}
          
          <ProductSlider  
            titleKey={t("common.youMayAlsoLike")}
            items ={similarArray} 
            renderItem= {(items:Product)=> <SliderProductCard product={items} />} 
            showArrows={true}/>
        </section>
      );
};
