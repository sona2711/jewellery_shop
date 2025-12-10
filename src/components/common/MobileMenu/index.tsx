import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Button, Menu } from "antd";
import { MENU_CONTENT } from "../MainMenu/const";
import { useTranslation } from "react-i18next";
import { buildMenuItems } from "../MainMenu/utils";
import styles from "./styles.module.css";

export const MenuMobile = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    return setOpen(true);
  };

  const handleClose = () => {
    return setOpen(false);
  };

  const translatedItems = buildMenuItems(MENU_CONTENT, t);

  return (
    <div className={styles.menu_wrapper}>
      <Button type="text" onClick={handleClickOpen} className={styles.menuIcon}>
        <MenuOutlined />
      </Button>
      <Drawer placement="left" onClose={handleClose} open={open}>
        <Menu
          mode="inline"
          items={translatedItems}
          onClick={() => setOpen(false)}
        />
      </Drawer>
    </div>
  );
};
