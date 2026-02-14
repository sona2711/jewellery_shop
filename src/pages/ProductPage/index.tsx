import { useMemo , useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import { fetchProducts } from "../../services/product.service";
import { ProductDetails } from "../../components/product/ProductDetails";
import type { Product } from "../../types/product";
import { ProductSlider }  from "../../components/product/ProductSlider";
import { Loader } from "../../components/common/Loader";
import styles from "./styles.module.css";

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

  const similarArray = useMemo(() => {
    if (!similarProducts?.length) return [];
    return products.filter((item) =>
      similarProducts.includes(item.id.toString())
    );
  }, [products, similarProducts]);

 
  return (
        <div> 
          {loading && 
            <div className={styles.container}>
              <Loader size={"large"}/>
            </div>
          }
          {product &&  <ProductDetails product={product} />}
          
          <ProductSlider  titleKey="You May Also Like" products ={similarArray}/>
        </div>
      );
};
