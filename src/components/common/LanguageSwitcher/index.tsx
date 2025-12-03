import { LANGUAGE_OPTIONS } from "./const";
import { Select } from "antd";
import type { LanguageSwitcherProps } from "./types";
import styles from "./styles.module.css";

export const LanguageSwitcher = ({language, handleChange}: LanguageSwitcherProps) => {

    return (
              <Select className={styles.languageSwitcher}
              value={language}
              onChange={handleChange}
              options={[... LANGUAGE_OPTIONS ]}
              />
    )
}