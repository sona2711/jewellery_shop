import { useTranslation } from 'react-i18next';
import { Row, Col, Typography, Card } from 'antd';
import type { AdvantagesProps } from './types';
import { defaultAdvantages } from './const';
import styles from './styles.module.css';

const { Text, Title } = Typography;

export const Advantages = ({items = defaultAdvantages, className = '',}:AdvantagesProps ) => {
  const { t } = useTranslation();

  return (
    <div className={`${styles.container} ${className}`}>
      <Title level={2} className={styles.sectionTitle}>
        {t('common.whyChooseUs')}
      </Title>
      <Row gutter={[8, 8]} justify="center" wrap={false} className={styles.reset_scroll}>
        {items.map((item, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card  className={styles.card}>
              <div className={styles.iconWrapper}><item.icon/></div>
              <Title level={4} className={styles.title}>
                {t(item.titleKey)}
              </Title>
              <Text type="secondary" className={styles.description}>
                {t(item.descriptionKey)}
              </Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};