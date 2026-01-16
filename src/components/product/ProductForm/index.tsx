import { useState, useMemo } from "react";
import { Typography, Button, Radio, Space } from "antd";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";
import { calculatePrice } from "./utils";

import type { PDPConfig, ProductFormValues } from "./types";

const { Title, Text } = Typography;

export const ProductForm = ({ pdp}: { pdp: PDPConfig,}) => {
  const { t } = useTranslation();
  const [values, setValues] = useState<ProductFormValues>({
    size: pdp.sizes?.find((s) => s.available)?.value,
    metal: pdp.metals?.find((m) => m.available)?.value,
    delivery: "deliver",
    quantity: 1,
  });

  const price = useMemo(() => calculatePrice(pdp, values), [pdp, values]);

  return (
    <div className={styles.container}>
      <Title level={4} className={styles.price}>
        ${price.toLocaleString()}
      </Title>
      {pdp.sizes && (
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <Text strong>{t("productForm.labels.size")}</Text>
          </div>
          <Space wrap>
            {pdp.sizes.map((size) => (
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
      {pdp.metals && (
        <div className={styles.section}>
          <Text strong>{t("productForm.labels.metal")}</Text>
          <Space wrap>
            {pdp.metals.map((metal) => (
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
      <Button type="primary" size="large" block>
        {t("productForm.button.addToCart")}
      </Button>
    </div>
  );
};
