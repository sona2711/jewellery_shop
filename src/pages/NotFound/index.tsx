import { Button, Flex, Grid, Result, Space } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import type { NotFoundProps } from "./types";
import { NOT_FOUND_ROUTES, NOT_FOUND_TEXT_KEYS } from "./const";
import { ItemCard } from "../../components/common/ItemCard";
import { COLLECTION_CARDS } from "../../api/mock/products/const";
import styles from "./styles.module.css";

const { useBreakpoint } = Grid;

export const NotFound = ({ className }: NotFoundProps) => {
  const { t } = useTranslation();
  const screens = useBreakpoint();
  const width = screens.md ? 300 : 150;

  return (
    <section className={`${styles.wrapper} ${className ?? ""}`}>
      <Result
        status="info"
        title={t(NOT_FOUND_TEXT_KEYS.title)}
        subTitle={t(NOT_FOUND_TEXT_KEYS.subtitle)}
        extra={
          <Space direction="vertical" size="large">
            <Flex justify="center" align="center" gap="small">
              <Button type="primary">
                <Link to={NOT_FOUND_ROUTES.home}>
                  {t(NOT_FOUND_TEXT_KEYS.home)}
                </Link>
              </Button>
              <Button>
                <Link to={NOT_FOUND_ROUTES.catalog}>
                  {t(NOT_FOUND_TEXT_KEYS.catalog)}
                </Link>
              </Button>
            </Flex>
            <Flex justify="center" align="center" gap="middle">
              <ItemCard cardInfo={COLLECTION_CARDS[0]} width={width} />
              <ItemCard cardInfo={COLLECTION_CARDS[2]} width={width} />
            </Flex>
          </Space>
        }
      />
    </section>
  );
};
