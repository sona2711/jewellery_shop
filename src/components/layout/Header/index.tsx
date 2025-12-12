import { useTranslation } from "react-i18next";
import { Layout } from "antd";
import { SearchOutlined } from "@ant-design/icons";
// import { getImageUrl } from "./utils";
import { BookingCartIcon } from "../../common/BookingCartIcon";
import { LanguageSwitcher } from "../../common/LanguageSwitcher";
import { MenuDisplay } from "../../common/MainMenu";
import { MenuMobile } from "../../common/MobileMenu";
import { Logo } from "../../common/Logo";
import type { HeaderProps } from "./types";
import styles from "./styles.module.css";

const { Header: AntHeader } = Layout;

export const Header = ({ image, cartItemsCount = 0 }: HeaderProps) => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <AntHeader className={styles.header}>
      <MenuMobile />
      <Logo image={image} />
      <div className={styles.navWrapper}>
          <MenuDisplay />
          <SearchOutlined className={styles.searchIcon} />
          <LanguageSwitcher
            language={i18n.language}
            handleChange={handleLanguageChange}
          />
          <BookingCartIcon count={cartItemsCount} /> 
      </div>
    </AntHeader>
  );
};
