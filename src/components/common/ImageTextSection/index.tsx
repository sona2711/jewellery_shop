import { useTranslation } from "react-i18next";
import { Row, Col, Typography, Button, Flex } from "antd";
import type { ImageTextProps } from "./types";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

export const ImageText = ({
  image,
  titleKey,
  descriptionKey,
  buttonTextKey,
  linkTo = "",
  imagePosition = "right",
}: ImageTextProps) => {
  const { t } = useTranslation();
  return (
    <section className={styles.container}>
      <Row
        align="middle"
        justify="center"
        gutter={[16, 16]}
        style={{ margin: 0 }}
      >
        <Col
          xs={{ span: 24, order: 2 }}
          md={{ span: 12, order: imagePosition === "left" ? 2 : 1 }}
        >
          <Flex
            className={styles.content_wrapper}
            justify="center"
            align="center"
            gap="middle"
            vertical
          >
            <Title level={2}>{t(titleKey)}</Title>
            <Text>{t(descriptionKey)}</Text>
            {buttonTextKey && (
              <Button type="text">
                <Link to={linkTo}>{t(buttonTextKey)}</Link>
              </Button>
            )}
          </Flex>
        </Col>
        <Col
          xs={{ span: 24, order: 1 }}
          md={{ span: 12, order: imagePosition === "left" ? 1 : 2 }}
        >
          <div className={styles.img_wrapper}>
            <img src={image} alt={t(titleKey)} />
          </div>
        </Col>
      </Row>
    </section>
  );
};
