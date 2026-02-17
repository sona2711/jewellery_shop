import { Card,  Button } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import type { ProductCardProps } from "./types";
import { formatPrice } from "./utils";  //getImageUrl,
import styles from "./styles.module.css";
import type { ProductAttributes } from "../../../types/product";



export const ProductCard = ({item, onBook, isFavorite, onToggleFavorite}: ProductCardProps) => {
  const { t } = useTranslation();
  const attributes: string[] = Object.values(item.attributes  as ProductAttributes);


  return (
    <Card
      className={styles.card}
      cover={
        <div className={styles.coverWrapper}>
          <img
            src={item.images[0]}
            alt={item.name}
            className={`${styles.image} ${styles.primaryImage}`}
          />

          {item.images[1] && (
            <img
            src={item.images[1]}
            alt={item.name}
            className={`${styles.image} ${styles.hoverImage}`}
            />
          )}
          <Button
            className={styles.favoriteBtn}
            type="text"
            onClick={onToggleFavorite}
            aria-label="Add to favorites"
        >
          {isFavorite ? (<HeartFilled style={{ color: "#6B201D" }} />) : (<HeartOutlined />)}
        </Button>
        </div>
      }
      actions={[
        <Button key="book" type="text" onClick={onBook} block>
          {t('productCard.cta.book')}
        </Button>,
      ]}
      >
      <Card.Meta
        title={item.name}
        description={
          <>
            <div className={styles.productPrice}>{formatPrice(item.price)}</div>
            <div className={styles.productInfo}>
            {
              attributes.map((el, index)=>(
                <span key={index}>{el}</span>
              ))
            }
            </div>
          </>
        }
      />
    </Card>
  );
};
