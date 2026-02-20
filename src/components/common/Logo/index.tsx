import { useNavigate} from "react-router-dom";
import { Flex } from "antd";

import { getImageUrl } from "./utils";
import type { LogoProps } from "./types";
import styles from "./styles.module.css";

export const Logo = ({image}: LogoProps) => {
    const navigate = useNavigate();

    const logoUrl = getImageUrl(image);
    return (
        <Flex 
        style={{ cursor: 'pointer', padding: '1rem' }}
        justify="center" 
        align="center" 
        onClick={() => navigate("/") }>
            <img src={logoUrl} alt="Logo" className={styles.logo} />
        </Flex>
    )
}