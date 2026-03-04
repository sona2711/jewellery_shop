import { useState } from "react";
import { Drawer, Button, Flex } from "antd";
import { SlidersOutlined } from "@ant-design/icons";

import type { FilterProps} from "../FiltersPanel/types";
import { Filters } from "../FiltersPanel";
import styles from "./styles.module.css"


export const MobileFilters = ({value, onChange }: FilterProps) => {

    const [open, setOpen] = useState(false);
    return (
    <>
        <Button type="text"
        icon={<SlidersOutlined />}
        style={{fontSize: "22px"}}
        onClick={() => setOpen(true)}
        />

        <Drawer
        title="Filters"
        placement="left"
        open={open}
        onClose={() => setOpen(false)}
        width="90%"
        >
            <Filters  value={value} onChange={onChange}/>
            <Flex className={styles.drawerActions}  gap="middle" vertical>
                <Button block onClick={()=>{'reset'}}>Reset</Button>
                <Button type="primary" block onClick={()=>{"Apply"}}>
                    Apply
                </Button>
            </Flex>
        </Drawer>
    </>
  );
};
