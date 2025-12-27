import { Badge } from "antd";
import  { ShoppingOutlined} from "@ant-design/icons";
import type { BookingCartIconProps } from "./types";
import styles from "./styles.module.css";


export const BookingCartIcon = ({count}: BookingCartIconProps) => {
    return (
            <Badge count={count} > 
                <ShoppingOutlined  className={styles.cartIcon}/>
            </Badge> 

    )
}
//showZero