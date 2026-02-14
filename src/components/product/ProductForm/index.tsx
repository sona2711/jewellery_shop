import { useState, useMemo } from "react";
import { Typography, Button, Radio, Space, Tag } from "antd";
import { useTranslation } from "react-i18next";

import type { Product } from "../../../types/product";
import type { ProductFormValues } from "./types";
import { AVAILABILITY_COLOR } from "./const";
import { calculatePrice } from "./utils";
import styles from "./styles.module.css";

const { Title, Text } = Typography;

export const ProductForm = ({ product}: { product: Product}) => {
  const { t } = useTranslation();
  const [values, setValues] = useState<ProductFormValues>({
    size: product.options?.sizes?.find((s) => s.available)?.value,
    metal: product.options?.metals?.find((m) => m.available)?.value,
    delivery: "deliver",
    quantity: 1,
  });

  const price = useMemo(() => calculatePrice(product, values), [product, values]);

  return (
    <div className={styles.container}>
      <div>
        <Title level={2}>{product.name}</Title>
        <Text type="secondary">{product.description}</Text>
      </div>
      <Tag color={AVAILABILITY_COLOR[product.availability]}>
            {product.availability}
      </Tag>
      <Title level={4} className={styles.price}>
        ${price.toLocaleString()}
      </Title>
      {product.options?.sizes && (
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <Text strong>{t("productForm.labels.size")}</Text>
          </div>
          <Space wrap>
            {product.options?.sizes.map((size) => (
              <Button
                key={size.value}
                disabled={!size.available}
                type={values.size === size.value ? "primary" : "default"}
                onClick={() =>
                  setValues((prev) => ({ ...prev, size: size.value }))
                }
              >
                {size.label}
              </Button>
            ))}
          </Space>
        </div>
      )}
      {product.options?.metals && (
        <div className={styles.section}>
          <Text strong>{t("productForm.labels.metal")}</Text>
          <Space wrap>
            {product.options?.metals.map((metal) => (
              <Button
                key={metal.value}
                disabled={!metal.available}
                type={values.metal === metal.value ? "primary" : "default"}
                onClick={() =>
                  setValues((prev) => ({ ...prev, metal: metal.value }))
                }
              >
                {metal.label}
              </Button>
            ))}
          </Space>
        </div>
      )}                              
      <Radio.Group
        value={values.delivery}
        onChange={(e) =>
          setValues((prev) => ({ ...prev, delivery: e.target.value }))
        }
      >
        <Space direction="vertical">
          <Radio value="deliver">{t("productForm.delivery.deliver")}</Radio>
          <Radio value="pickup">{t("productForm.delivery.pickup")}</Radio>
        </Space>
      </Radio.Group>
      <Button type="primary" size="large" block onClick={()=> {console.log(values)}}>
        {t("productForm.button.addToCart")}
      </Button>
    </div>
  );
};
