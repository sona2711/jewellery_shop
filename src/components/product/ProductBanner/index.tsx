import {Flex, Typography} from "antd";
import type { BannerProps} from "./types";
import { CollectionCard } from "../../common/CollectionCard";
import { COLLECTIONS } from "../../../api/mock/products/const";
import type { CollectionConfig } from "../../../api/mock/products/types";
import styles from "./styles.module.css";                                          


const {Title} = Typography;
export const Banner  = ({coverText, gender = ""}: BannerProps) => {

    const filterCategory = COLLECTIONS.filter((collection: CollectionConfig)=> collection.gender === gender).slice(0,3)
    console.log(filterCategory)
    return(
        <section className={styles.cover_wrapper} aria-label="Banner">
            <div className={styles.quote_wrapper}>
                <Title level={3} style={{color: "white", textAlign: "center"}}>{coverText}</Title>
            </div>
            <Flex style={{flex:2}} justify="center" gap="small" align="center">
                { filterCategory.map((coll, index)=>
                    <CollectionCard key={index} collection={coll}  width={200} />
                )}
            </Flex>
        </section>
    )
}