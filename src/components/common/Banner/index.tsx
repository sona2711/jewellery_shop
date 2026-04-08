import { Flex , Typography} from "antd";

import type { BannerProps } from "./types";

const {Title, Text} = Typography;

export const Banner  =  ({image, title, subTitle}: BannerProps) => {
    return(
        <section aria-label="Banner">
            <Flex justify="center" align="middle" style={{backgroundImage: image}}>
                <Title level={2}>{title}</Title>
                <Text >{subTitle}</Text>
            </Flex>
        </section>
    )
}