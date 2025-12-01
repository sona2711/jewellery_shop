import { Col, Typography, Space} from "antd"
const { Title, Link } = Typography
import type { FooterColumnProps } from "./types"
// import { useTranslation } from "react-i18next";

export const FooterColumn = ({title, links}: FooterColumnProps) => {

    // const { t, i18n } = useTranslation()
    return (
        <>
            <Col xs={24} sm={12} md={6}>
                <Title level={4}>{title}</Title>
                <Space direction="vertical" size="small">
                    {links.map((item) => (
                        <Link key={item.href} href={item.href}>
                            {item.label}
                        </Link>
                    ))}
                </Space>
            </Col>
        </>
    )
}