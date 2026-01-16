import { Card } from "antd";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";
import type { ProductSliderProps } from "./types";

const { Meta } = Card;

export const ProductSlider = ({ titleKey, products,}: ProductSliderProps) => {
  const { t } = useTranslation();

  if (!products.length) return null;

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>{t(titleKey)}</h3>

      <div className={styles.slider}>
        {products.map((product) => (
          <Card
            key={product.id}
            hoverable
            className={styles.card}
            cover={
              <img
                src={product.images[0]}
                alt={product.name}
                className={styles.image}
              />
            }
          >
            <Meta
              title={product.name}
              description={<div className={styles.productPrice}>{`$${product.price}`}</div>}
            />
          </Card>
        ))}
      </div>
    </section>
  );
};

