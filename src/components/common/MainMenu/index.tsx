import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { TOP_MENU, MENU_IMAGES } from "./const";
import type { MenuKey } from "./types";
import { COLLECTIONS } from "../../../api/mock/products/const";
import { getMenuContent } from "./utils";
import styles from "./styles.module.css";

export const MainMenu = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState<MenuKey | null>(null);
  const menuContent = getMenuContent(t, COLLECTIONS, MENU_IMAGES);

  return (
    <div className={styles.wrapper} onMouseLeave={() => setActive(null)}>
      <nav className={styles.topNav}>
        {TOP_MENU.map((item) => (
          <div
            key={item.key}
            className={styles.navItem}
            onMouseEnter={() => setActive(item.key)}
          >
            {t(item.labelKey)}
          </div>
        ))}
      </nav>

      {active && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownContent}>
            <div className={styles.gridContainer}>
              <div className={styles.grid}>
                {menuContent[active]?.sections.map((section, idx) => (
                  <div key={idx}>
                    {section.title && <h4>{section.title}</h4>}
                    {section.links.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setActive(null)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {menuContent[active]?.image && (
              <div className={styles.dropdownImage}>
                <img src={menuContent[active].image} alt={active} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};