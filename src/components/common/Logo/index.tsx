import { getImageUrl } from "./utils";
import type { LogoProps } from "./types";
import styles from "./styles.module.css";

export const Logo = ({image}: LogoProps) => {

    const logoUrl = getImageUrl(image);
    return (
        <div className={styles.logoWrapper}>
            <img src={logoUrl} alt="Logo" className={styles.logo} />
      </div>
    )
}