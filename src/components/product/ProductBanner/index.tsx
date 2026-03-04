import { Flex, Grid, Typography } from "antd";

import { ItemCard } from "../../common/ItemCard";
import { COLLECTION_CARDS } from "../../../api/mock/products/const";
import type { ProductBannerProps } from "./types";
import type { CardInfo } from "../../common/ItemCard/types";
import styles from "./styles.module.css";

const { Title } = Typography;
const { useBreakpoint } = Grid;

export const ProductBanner = ({
  coverText,
  gender = "",
}: ProductBannerProps) => {
  const screens = useBreakpoint();
  const width = screens.md ? 150 : 100;
  const filterCategory = COLLECTION_CARDS.filter(
    (collection: CardInfo) => collection.gender === gender,
  ).slice(0, 3);

  return (
    <section className={styles.cover_wrapper} aria-label="Banner">
      <Flex
        className={styles.title_wrapper}
        justify="center"
        gap="small"
        align="center"
      >
        <Title level={3} style={{ color: "white", textAlign: "center" }}>
          {coverText}
        </Title>
      </Flex>
      <Flex justify="center" gap="small" align="center">
        {filterCategory.map((coll, index) => (
          <ItemCard key={index} cardInfo={coll} width={width} />
        ))}
      </Flex>
    </section>
  );
};
