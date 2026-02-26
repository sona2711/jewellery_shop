import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { Header } from "../Header";
import { AppFooter } from "../Footer";
import { ScrollToTop } from "../ScrollToTop";
import Logo from "../../../assets/images/logo/theme=Ligth.png";
import styles from "./styles.module.css";




export const MainLayout = () => {
    return (
        <Layout className={styles.main_container}>
            <ScrollToTop/>
            <Header image={Logo} cartItemsCount={0}/>
            <main className={styles.main}>
                <Outlet/>
            </main>
            <AppFooter/>
        </Layout>
    )
}