import { Row, Col } from "antd";
import type { ProductListProps } from "./types";
import { ProductCard } from "../ProductCard";
import styles from "./styles.module.css";

export const ProductList = ({items}: ProductListProps) => {

  return (
    <div className={styles.container}>
      <Row gutter={[16, 16]}>
        {items.map((item, index) => (
          <Col key={String(index)} xs={24} sm={12} md={12} lg={6} xl={6}>
            <ProductCard key={item.id} image={item.images[0]} title={item.name} price={item.price} onBook={()=>{}}/>
          </Col>
        ))}
      </Row>
    </div>
  );
};
