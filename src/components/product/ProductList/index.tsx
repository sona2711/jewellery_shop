import { useNavigate } from "react-router-dom";
import { Row, Col } from "antd";
import type { ProductListProps } from "./types";
import { ProductCard } from "../ProductCard";
import styles from "./styles.module.css";

export const ProductList = ({items}: ProductListProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Row gutter={[5, 5]}>
        {items.map((item, index) => (
          <Col key={String(index)} xs={12} sm={12} md={12} lg={6} xl={6}>
            <ProductCard 
            key={item.id} 
            item = {item}
            onBook={()=> navigate(`/product/:${item.id}`)}
            onToggleFavorite={()=> {}} 
            isFavorite={false}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};
