import { Row, Col, Typography, Tag, Space } from "antd";
import { ProductDetailsAccordion } from "../ProductDetailsAccordion";
import { ProductGallery } from "../ProductGallery";
import { ProductForm } from "../ProductForm";
import type { ProductDetailsProps } from "./types";
import { AVAILABILITY_COLOR, mockPdp } from "./const";
// import { formatPrice } from "./utils";

import styles from "./styles.module.css";

const { Title, Text } = Typography;

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <Row gutter={[16, 16]} className={styles.wrapper} justify="space-between">
      <Col xs={24} md={14} lg={16}>
        <ProductGallery images={product.images} name={product.name} />
      </Col>
      <Col xs={24} md={10} lg={8}>
        <Space direction="vertical" size="small" className={styles.info}>
          <div>
            <Title level={2}>{product.name}</Title>
            <Text type="secondary">{product.description}</Text>
            {/* {product.price && (
            <Title level={4}>{formatPrice(product.price)}</Title>
          )} */}
          </div>

          <Tag color={AVAILABILITY_COLOR[product.availability]}>
            {product.availability}
          </Tag>
          <ProductForm pdp={mockPdp} />
          <ProductDetailsAccordion attributes={product.attributes} />
        </Space>
      </Col>
    </Row>
  );
};
