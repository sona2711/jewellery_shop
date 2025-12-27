import {Typography} from "antd";
// import { AppCarousel} from "../../common/Carousel"
import type { BackstageProps} from "./types";
import styles from "./styles.module.css";                                          


const Text = Typography;
export const Backstage  = ({coverText}: BackstageProps) => {
    
    return(
        <div className={styles.cover_wrapper}>
            <div className="quote_wrapper">
                <Text >{coverText}</Text>
            </div>
            <div className="category_wrapper">
                {/* <AppCarousel  list={categoryList}/>    */}
            </div>
        </div>
    )
}