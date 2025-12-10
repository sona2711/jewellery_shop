import { items} from "./const";
// import { Select } from "antd";
// import type { LanguageSwitcherProps } from "./types";
 import styles from "./styles.module.css";

// export const LanguageSwitcher = ({language, handleChange}: LanguageSwitcherProps) => {

//     return (
//               <Select className={styles.languageSwitcher}
//               value={language}
//               onChange={handleChange}
//               options={[... LANGUAGE_OPTIONS ]}
//               />
//     )
// }


import { Dropdown } from "antd";
import type { LanguageSwitcherProps } from "./types";

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
        {language.toUpperCase()}
      </span>
    </Dropdown>
  );
};
