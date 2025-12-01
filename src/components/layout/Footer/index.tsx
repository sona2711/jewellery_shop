import { Layout, Row } from "antd";
import { FooterColumn } from "../../common/FooterColumn";
import { FOOTER_SECTIONS } from "./const";

const Footer = Layout


export const AppFooter = () => {
    return(
        <Footer className = "style.container">
            <Row gutter={[40, 40]}>
                {FOOTER_SECTIONS.map((section ) => (
                    <FooterColumn key={section.title} title={section.title} links={section.links}/>
                )
                )}
            </Row>    
        </Footer>
    )
}