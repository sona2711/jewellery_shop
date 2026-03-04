import { Card } from "antd";
import { Link } from "react-router-dom";
import type { SliderProductCardProps } from "./types";
import styles from "./styles.module.css";

const { Meta } = Card;

export const SliderProductCard = ({ product }: SliderProductCardProps) => (
  <Link to={`/product/${product.id}`} className={styles.link}>
    <Card
      hoverable
      cover={<img src={product.images[0]} alt={product.name} className={styles.image} />}
      className={styles.card}
    >
      <Meta
        title={product.name}
        description={<div className={styles.price}>${product.price}</div>}
      />
    </Card>
  </Link>
);