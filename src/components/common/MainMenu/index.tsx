import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu } from "antd";
import { MENU_CONTENT } from "./const";
import type { MenuKey } from "../MobileMenu/types";
import styles from "./styles.module.css";
import { buildMenuItems } from "./utils";

export const MenuDisplay = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState<MenuKey>("women");

  const handleClick = (e: { key: string }) => {
    return setActive(e.key as MenuKey);
  };
  const translatedItems = buildMenuItems(MENU_CONTENT, t);

  return (
    <div className={styles.menuWrapper}>
      <Menu
        mode="horizontal"
        className={styles.menu}
        items={translatedItems}
        defaultSelectedKeys={[active]}
        onClick={handleClick}
      />
    </div>
  );
};
