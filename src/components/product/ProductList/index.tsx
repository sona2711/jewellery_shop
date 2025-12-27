// import { useState } from "react";
import { Row, Col } from "antd";
import type { ProductListProps } from "./types";
// import type { Product } from "../../../types/product";
import { ProductCard } from "../ProductCard";
import styles from "./styles.module.css";

export const ProductList = ({items}: ProductListProps) => {
  // const [item, setItem] = useState<Product[id]>()
  // const handleOnBook = (productId: number)=>{
  //   // return setItem(productId)
  // }
  return (
    <div className={styles.container}>
      <Row gutter={[1, 1]}>
        {items.map((item, index) => (
          <Col key={String(index)} xs={24} sm={12} md={12} lg={6} xl={6}>
            <ProductCard 
            key={item.id} 
            item = {item}
            onBook={()=> {}}// handleOnBook
            onToggleFavorite={()=> {}} 
            isFavorite={false}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};
