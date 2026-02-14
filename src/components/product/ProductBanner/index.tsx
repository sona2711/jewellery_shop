import {Typography} from "antd";
import type { BannerProps} from "./types";
// import { ProductSlider } from "../ProductSlider";
import styles from "./styles.module.css";                                          


const Text = Typography;
export const Banner  = ({coverText}: BannerProps) => {
    
    return(
        <div className={styles.cover_wrapper}>
            <div className="quote_wrapper">
                <Text >{coverText}</Text>
            </div>
            <div className="category_wrapper">
                {/* <ProductSlider titleKey="Category"/> */}
            </div>
        </div>
    )
}