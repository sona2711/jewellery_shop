import { Col, Layout, Row } from "antd";
import { Typography } from "antd";
import { FooterColumn } from "../../common/FooterColumn";
import { SocialMedia } from "../../common/SocialMedia";
import { FooterContactForm } from "../../forms/FooterContactForm"
import { Logo } from "../../common/Logo";
import logo from "../../../assets/images/logo/theme=dark.png";
import { FOOTER_SECTIONS, FOOTER_TEXT } from "./const";
import { copyWritingText } from "./utils";
import styles from "./styles.module.css";


const Footer = Layout;
const { Text } = Typography;

export const AppFooter = () => {
    
 
    return(
        <Footer className={styles.footer}>
            <Row className={styles.row} gutter={[24, 24]}> 
                <Col span={24}>
                    <FooterContactForm />
                </Col>
                <Col key="socialMedia" xs={24} sm={12} md={6}>
                    <SocialMedia/>
                </Col>
            </Row>
            <Row className={styles.row} gutter={[24, 24]} >
                {FOOTER_SECTIONS.map((section ) => (
                    <Col key={section.title} xs={24} sm={12} md={6}>
                        <FooterColumn  key={section.title} title={section.title} links={section.links}/>
                    </Col>
                ))}
            </Row>
            <Row justify="center" gutter={[24, 16]} style={{ margin: 0 }}> 
                <Col className={styles.col} span={24}>
                    <Logo image={logo} />
                </Col>
                <Col className={styles.col} span={24}>
                    <Text style={{color:"white", fontWeight: 2, fontStyle: "italic"}}>      
                        {FOOTER_TEXT}
                    </Text>
                </Col>
                <Col className={styles.col} span={24}>
                    <Text  style={{color:"white", fontWeight: 2, fontStyle: "italic"}}>      
                       { copyWritingText() }
                    </Text>
                </Col>
            </Row>
        </Footer>
    )
}