import { Layout, Row } from "antd";
import { FooterColumn } from "../../common/FooterColumn";
import { FOOTER_SECTIONS } from "./const";

const Footer = Layout


export const AppFooter = () => {
 
    return(
        <Footer>
            {/* <div className="styles.contacts-wrapper">
                <div>email</div>
                <div>Social media</div>
            </div> */}
            <Row gutter={[24, 24]}>
                {FOOTER_SECTIONS.map((section ) => (
                    <FooterColumn key={section.title} title={section.title} links={section.links}/>
                ))}
            </Row>    
        </Footer>
    )
}