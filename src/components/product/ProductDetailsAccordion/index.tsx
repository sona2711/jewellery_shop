import { Collapse, Typography, Descriptions } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import type { DetailsAccordionProps } from "./types";
import { ACCORDION_KEYS, ATTRIBUTE_LABEL_I18N } from "./const";
import styles from "./styles.module.css";

const { Text, Title } = Typography;

export const ProductDetailsAccordion = ({attributes}: DetailsAccordionProps) => {
  const { t } = useTranslation();
  const attributeArr = Object.entries(attributes);

  const items = [
    {
      key: ACCORDION_KEYS.DETAILS,
      label: t("product.details.title"),
      children: (
        <Descriptions
          column={1}
          size="small"
          className={styles.descriptions}
        >
          {attributeArr.map(([key, value]) => {
            const labelKey = ATTRIBUTE_LABEL_I18N[key];

            if (!labelKey || !value) return null;

            return (
              <Descriptions.Item key={key} label={t(labelKey)}>
                {value}
              </Descriptions.Item>
            );
          })}
        </Descriptions>
      ),
    },
    {
      key: ACCORDION_KEYS.CARE,
      label: t("product.care.title"),
      children: (
        <>
          <Title level={5}>{t("product.care.metalTitle")}</Title>
          <Text className={styles.content}>
            {t("product.care.metalText")}
          </Text>

          <Title level={5}>{t("product.care.gemstoneTitle")}</Title>
          <Text className={styles.content}>
            {t("product.care.gemstoneText")}
          </Text>

          <Text type="secondary" className={styles.note}>
            {t("product.care.serviceNote")}
          </Text>
        </>
      ),
    },
    {
      key: ACCORDION_KEYS.GIFTING,
      label: t("product.gifting.title"),
      children: (
        <Text className={styles.content}>
          {t("product.gifting.giftingText")}
        </Text>
      ),
    },
  ];

  return (
    <Collapse
      accordion
      ghost
      items={items}
      expandIconPosition="end"
      className={styles.accordion}
      expandIcon={({ isActive }) => (
        <PlusOutlined
          className={`${styles.icon} ${isActive ? styles.active : ""}`}
        />
      )}
    />
  );
};
