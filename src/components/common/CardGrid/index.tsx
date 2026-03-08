import { t } from "i18next";
import { Row , Col, Typography} from "antd";
import type { SectionProps } from "./types";
import styles from "./styles.module.css";

const {Title} = Typography;
export const CardGrid = ({title, cards, quantity}: SectionProps)=> {
    return(
        <section className={styles.gifting_wrapper} >
            <Title level={2} style={{marginBottom: "2rem"}}>{t(title)}</Title>
            <Row gutter={[16,16]} style={{margin:0}} justify="center" align="middle">
                { cards.map((card, index)=> (
                    <Col key={index} xs={quantity == 2 ? 24 : 12} md={12} lg={12} flex="none">
                        {card}
                    </Col>
                ))}
            </Row>
        </section>
    )
}

