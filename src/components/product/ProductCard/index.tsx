import { Card, Image, Button } from "antd";
import type { ProductCardProps } from "./types";
import styles from "./styles.module.css";
import { BUTTON_TEXT } from "./const";
import { getImageUrl, formatPrice } from "./utils";

export const ProductCard = ({
  image,
  title,
  price,
  onBook,
}: ProductCardProps) => {
  const imageUrl = getImageUrl(image);

  return (
    <Card
      className={styles.card}
      cover={
        <Image
          src={imageUrl}
          alt={title}
          className={styles.image}
          preview={false}
          fallback="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23ddd' width='200' height='200'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='14' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3ENo Image%3C/text%3E%3C/svg%3E"
        />
      }
      actions={[
        <Button key="book" type="primary" onClick={onBook} block>
          {BUTTON_TEXT.BOOK}
        </Button>,
      ]}
    >
      <Card.Meta title={title} description={formatPrice(price)} />
    </Card>
  );
};
