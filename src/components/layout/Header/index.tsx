import { useTranslation } from "react-i18next";
import { Layout, Menu} from "antd";
import  {SearchOutlined, MenuOutlined} from "@ant-design/icons";
import type { HeaderProps } from "./types";
import { getImageUrl } from "./utils";
import { BookingCartIcon } from "../../common/BookingCartIcon";
import { LanguageSwitcher } from "../../common/LanguageSwitcher";
import styles from "./styles.module.css";


const { Header: AntHeader } = Layout;

export const Header = ({ image, cartItemsCount = 0}: HeaderProps) => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  const menuItems = [
    { key: "home", label: t("menu.home") },
    { key: "novelties", label: t("menu.novelties") },
    { key: "pendants", label: t("menu.pendants") },
    { key: "bracelets", label: t("menu.bracelets") },
    { key: "rings", label: t("menu.rings") },
    { key: "cufflinks", label: t("menu.cufflinks") },
    { key: "about", label: t("menu.about") },
    { key: "contact", label: t("menu.contact") },
  ];

  const logoUrl = getImageUrl(image);

  return (
    <AntHeader className={styles.header}>
      <MenuOutlined className={styles.menuIcon} onClick={() => {}}/>
      <div className={styles.logoWrapper}>
        <img src={logoUrl} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.navWrapper}>
        <div className={styles.actionsWrapper}>
           <div className={styles.actions}>
              {/* <Select
              className={styles.languageSwitcher}
              value={i18n.language}
              onChange={handleLanguageChange}
              options={[... LANGUAGE_OPTIONS ]}
              /> */}
              <LanguageSwitcher language={i18n.language} handleChange={handleLanguageChange}/>
              <BookingCartIcon count = {cartItemsCount}/>
            </div>
          </div>
        <div className={styles.menuWrapper}>
          <Menu
           mode="horizontal"
           className={styles.menu}
           items={menuItems}
           defaultSelectedKeys={["home"]}
           />
           <SearchOutlined className={styles.searchIcon} />
          </div>
        </div>
    </AntHeader>
  );
};
