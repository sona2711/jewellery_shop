import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { Row, Col} from "antd";

import { PAGE_SIZE } from "./const";
import type { ProductListProps } from "./types";
import { ProductCard } from "../ProductCard";
import { Loader } from "../../common/Loader";
import styles from "./styles.module.css";

export const ProductList = ({items}: ProductListProps) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState(items.slice(0, PAGE_SIZE));
  const [hasMore, setHasMore] = useState(items.length > PAGE_SIZE);


  const loadMore = () => {
    setTimeout(() => {
      const currentLength = products.length;
      const nextBatch = items.slice(currentLength, currentLength + PAGE_SIZE);
      if (nextBatch.length > 0) {
        setProducts(prev => [...prev, ...nextBatch]);
      }
      if (currentLength + nextBatch.length >= items.length) {
        setHasMore(false);
      }
    }, 300);
  }

  return (
    <section className={styles.container}>
      <InfiniteScroll
      dataLength={items.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<Loader/>}
      style={{overflow: "hidden"}}
      >
        <Row gutter={[8, 8]}>
          {items.map((item, index) => (
            <Col key={String(index)} xs={12} sm={12} md={12} lg={6} xl={6}>
              <ProductCard 
              key={item.id} 
              item = {item}
              onBook={()=> navigate(`/product/${item.id}`)}
              onToggleFavorite={()=> {}} 
              isFavorite={false}
              />
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </section>
  );
};
