import { Typography } from "antd";
import { Link } from "react-router-dom";
import type { CollectionCardProps } from "./types";
import styles from "./styles.module.css";

const {Title} = Typography

export const CollectionCard = ({ collection, width }: CollectionCardProps) => (
  <Link to={`/catalog/${collection.slug}`} className={styles.link}>
    <div className={styles.collectionCard} style={{width: width}}>
      <img src={collection.images?.[0] || "/placeholder.jpg"} alt={collection.collection}/>
      <Title level={3}>{collection.collection}</Title>
    </div>
  </Link>
);