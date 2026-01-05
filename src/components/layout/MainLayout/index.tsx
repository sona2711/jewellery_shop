import { Outlet } from "react-router-dom"
import { Layout } from "antd"
import { Header } from "../Header"
import { AppFooter } from "../Footer"
import Logo from "../../../assets/images/logo/theme=Ligth.png"
import styles from "./styles.module.css"




export const MainLayout = () => {
    return (
        <Layout className={styles.main_container}>
            <Header image={Logo} cartItemsCount={0}/>
            <Outlet/>
            <AppFooter/>
        </Layout>
    )
}