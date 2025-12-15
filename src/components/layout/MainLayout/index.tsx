import { Layout } from "antd"
import { Header } from "../Header"
import { AppFooter } from "../Footer"
import { Catalog } from "../../../pages/Catalog"
import Logo from "../../../assets/images/logo/theme=Ligth.png"





export const MainLayout = () => {
    return (
        <Layout className="styles.main-container">
            <Header image={Logo} cartItemsCount={0}/>
            <Catalog/>
            <AppFooter/>
        </Layout>
    )
}