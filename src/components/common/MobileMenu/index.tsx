import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Button, Menu } from "antd";
import { useTranslation } from "react-i18next";
import { COLLECTIONS } from "../../../api/mock/products/const";
import { buildMobileMenuItems } from "../MainMenu/utils"; // նույն utils-ից
import styles from "./styles.module.css";

export const MenuMobile = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const menuItems = buildMobileMenuItems(t, COLLECTIONS);

  return (
    <div className={styles.menu_wrapper}>
      <Button type="text" onClick={handleClickOpen} className={styles.menuIcon}>
        <MenuOutlined />
      </Button>
      <Drawer placement="left" onClose={handleClose} open={open}>
        <Menu
          mode="inline"
          items={menuItems}
          onClick={() => setOpen(false)}
        />
      </Drawer>
    </div>
  );
};