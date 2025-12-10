import { useTranslation } from "react-i18next";
import { Col, Typography, Space} from "antd";
import type { FooterColumnProps } from "./types";
const { Title, Link } = Typography;
import styles from "./style.module.css"


export const FooterColumn = ({title, links}: FooterColumnProps) => {

    const { t } = useTranslation();

    return (
        <>
            <Col xs={24} sm={12} md={6} >
                <Title className={styles.title}level={4}>{t(title)}</Title>
                <Space direction="vertical" size="small">
                    {links.map((item) => (
                        <Link key={item.href} href={item.href}>
                            {t(item.label)}
                        </Link>
                    ))}
                </Space>
            </Col>
        </>
    )
}