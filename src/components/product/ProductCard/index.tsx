import { Card, Image, Button } from "antd";
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
          <Image
          src={item.images[0]}
          alt={item.name}
          className={styles.image}
          preview={false}
          fallback="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23ddd' width='200' height='200'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='14' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3ENo Image%3C/text%3E%3C/svg%3E"
          />
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
