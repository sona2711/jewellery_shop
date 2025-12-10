import { Layout, Row } from "antd";
import { FooterColumn } from "../../common/FooterColumn";
import { FOOTER_SECTIONS } from "./const";
import styles from "./styles.module.css";

const Footer = Layout


export const AppFooter = () => {
 
    return(
        <Footer className={styles.footer}>
            <div className="styles.contacts-wrapper">
                <div>email</div> 
                <div>Social media</div>
            </div>
            <Row style={{ margin: "20px 0"}} gutter={[24, 24]} >
                {FOOTER_SECTIONS.map((section ) => (
                    <FooterColumn  key={section.title} title={section.title} links={section.links}/>
                ))}
            </Row>
        </Footer>
    )
}