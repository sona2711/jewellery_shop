import { useTranslation } from "react-i18next";
import { Layout, Flex } from "antd";
import { SearchOutlined } from "@ant-design/icons";
// import { getImageUrl } from "./utils";
import { BookingCartIcon } from "../../common/BookingCartIcon";
import { LanguageSwitcher } from "../../common/LanguageSwitcher";
import {MainMenu  } from "../../common/MainMenu";
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
      <Flex style={{ width: '100%', padding: '0 1rem'}} gap="middle" justify="space-between" align="center">
        <Flex gap="middle" justify="flex-start">
          <MenuMobile />
          <LanguageSwitcher
            language={i18n.language}
            handleChange={handleLanguageChange}
            />
        </Flex>
        <Logo image={image} />  
        <Flex gap="middle" justify="flex-end">
          <SearchOutlined className={styles.searchIcon} />
          <BookingCartIcon count={cartItemsCount} /> 
          </Flex>
      </Flex>
      <MainMenu />
    </AntHeader>
  );
};
