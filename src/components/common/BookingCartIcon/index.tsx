import { Badge } from "antd";
import  { ShoppingCartOutlined} from "@ant-design/icons";
import type { BookingCartIconProps } from "./types";
import styles from "./styles.module.css";


export const BookingCartIcon = ({count}: BookingCartIconProps) => {
    return (
            <Badge count={count} showZero>
                <ShoppingCartOutlined  className={styles.cartIcon}/>
            </Badge> 

    )
}