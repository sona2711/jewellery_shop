import { Layout, Menu, Select, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import type { HeaderProps } from "./types";
import styles from "./styles.module.css";
import { LANGUAGE_OPTIONS } from "./const";
import { getImageUrl } from "./utils";

const { Header: AntHeader } = Layout;

export const Header = ({ image, cartItemsCount = 0 }: HeaderProps) => {
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
  // const shopTitle = title || t("shop.name");

  return (
    <AntHeader className={styles.header}>
      <div className={styles.logoWrapper}>
        <img src={logoUrl} alt="Logo" className={styles.logo} />
        {/* {shopTitle && <span>{t("shop.name")}</span>} */}
      </div>
      <Menu
        mode="horizontal"
        className={styles.menu}
        items={menuItems}
        defaultSelectedKeys={["home"]}
      />
      <div className={styles.actions}>
        <Select
          className={styles.languageSwitcher}
          value={i18n.language}
          onChange={handleLanguageChange}
          options={[...LANGUAGE_OPTIONS]}
        />
        <Badge count={cartItemsCount} showZero>
          <ShoppingCartOutlined className={styles.cartIcon} />
        </Badge>
      </div>
    </AntHeader>
  );
};
