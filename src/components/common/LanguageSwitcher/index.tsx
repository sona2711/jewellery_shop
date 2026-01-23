import { Dropdown } from "antd";
import { items} from "./const";
import type { LanguageSwitcherProps } from "./types";
import styles from "./styles.module.css";

export const LanguageSwitcher = ({ language, handleChange }: LanguageSwitcherProps) => {

  return (
    <Dropdown
      menu={{
        items,
        onClick: (info) => handleChange(info.key),
      }}
      trigger={["click"]}
    >
      <span className={styles.languageSwitcher}>
        {language?.toUpperCase()}
      </span>
    </Dropdown>
  );
};
