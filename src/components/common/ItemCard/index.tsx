import { useTranslation } from "react-i18next";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import type { ItemCardProps } from "./types";
import styles from "./styles.module.css";

const { Title, Text } = Typography;

export const ItemCard = ({ cardInfo, width }: ItemCardProps) => {
  const { t } = useTranslation();
  return (
    <>
      <Link to={cardInfo.to} className={styles.link}>
        <div className={styles.collectionCard} style={{ maxWidth: width }}>
          <img src={cardInfo.image || "/placeholder.jpg"} alt={cardInfo.name} />
          <div className={styles.textOverlay}>
            <Title level={3} style={{ color: "white" }}>
              {t(cardInfo.name)|| cardInfo.name}
            </Title>
            {cardInfo.description && <Text style={{color: "white"}}>{t(cardInfo.description)}</Text>}
          </div>
        </div>
      </Link>
    </>
  );
};
