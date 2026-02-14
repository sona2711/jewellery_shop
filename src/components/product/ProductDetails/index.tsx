import { Row, Col, Space } from "antd";
import { ProductDetailsAccordion } from "../ProductDetailsAccordion";
import { ProductGallery } from "../ProductGallery";
import { ProductForm } from "../ProductForm";
import type { ProductDetailsProps } from "./types";


import styles from "./styles.module.css";



export const ProductDetails = ({ product }: ProductDetailsProps) => {
 
  return (
    <Row gutter={[16, 16]} className={styles.wrapper} justify="space-between">
      <Col xs={24} md={14} lg={16}>
        <ProductGallery images={product.images} name={product.name} />
      </Col>
      <Col xs={24} md={10} lg={8}>
        <Space direction="vertical" size="small" className={styles.info}>
          <ProductForm product={product} />
          <ProductDetailsAccordion attributes={product.attributes} />
        </Space>
      </Col>
    </Row>
  );
};
