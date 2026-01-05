import { Col, Layout, Row } from "antd";
import { FooterColumn } from "../../common/FooterColumn";
import { FOOTER_SECTIONS, FOOTER_TEXT } from "./const";
import { FooterContactForm } from "../../forms/FooterContactForm"
import { Logo } from "../../common/Logo";
import logo from "../../../assets/images/logo/theme=dark.png";
import { Typography } from "antd";
import { SocialMedia } from "../../common/SocialMedia";
import styles from "./styles.module.css";


export const AppFooter = () => {
    const Footer = Layout;
    const { Text } = Typography;
    
 
    return(
        <Footer className={styles.footer}>
            <Row justify="center" gutter={[24, 16]}> 
                <Col className={styles.col} span={24}>
                    <Logo image={logo} />
                    <Text className={styles.note} style={{color:"white", fontWeight: 2, fontStyle: "italic"}}>      
                    {FOOTER_TEXT}
                    </Text>
                </Col>
            </Row>
            <Row className={styles.row} gutter={[24, 24]}> 
                <Col span={24}>
                    <FooterContactForm />
                    
                </Col>
            </Row>
            <Row className={styles.row} gutter={[24, 24]} >
                {FOOTER_SECTIONS.map((section ) => (
                    <Col key={section.title} xs={24} sm={12} md={6}>
                        <FooterColumn  key={section.title} title={section.title} links={section.links}/>
                    </Col>
                ))}
                <Col key="socialMedia" xs={24} sm={12} md={6}>
                    <SocialMedia/>
                </Col>
            </Row>
        </Footer>
    )
}