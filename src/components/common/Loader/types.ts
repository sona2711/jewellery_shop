import type { SpinProps } from "antd";

export type LoaderSize = 'small' | 'default' | 'large';


export type LoaderProps = {
    size?: LoaderSize;
    style?: SpinProps['style'];
}