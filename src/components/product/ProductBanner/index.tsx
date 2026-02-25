import {Flex, Grid, Typography} from "antd";
import type { ProductBannerProps} from "./types";
import { CollectionCard } from "../../common/CollectionCard";
import { COLLECTIONS } from "../../../api/mock/products/const";
import type { CollectionConfig } from "../../../api/mock/products/types";
import styles from "./styles.module.css";                                          


const {Title} = Typography;
const { useBreakpoint } = Grid;

export const ProductBanner  = ({coverText, gender = ""}: ProductBannerProps) => {
    const screens = useBreakpoint();
    const width = screens.md ? (150) : (100)
    const filterCategory = COLLECTIONS.filter((collection: CollectionConfig)=> collection.gender === gender).slice(0,3)

    return(
        <section className={styles.cover_wrapper} aria-label="Banner">
            <Flex className={styles.title_wrapper} justify="center" gap="small" align="center">
                <Title level={3} style={{color: "white", textAlign: "center"}}>{coverText}</Title>
            </Flex>
            <Flex justify="center" gap="small" align="center">
                { filterCategory.map((coll, index)=>
                    <CollectionCard key={index} collection={coll}  width={width} />
                )}
            </Flex>
        </section>
    )
}