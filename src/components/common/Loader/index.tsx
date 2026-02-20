import { Flex, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Logo } from '../Logo';
import type { LoaderProps } from './types';
import logo from "../../../assets/images/logo/logo_dark.png"

export const Loader = ({size}: LoaderProps) => (
  <Flex justify="center" align="center" gap="middle" vertical style={{width: "100vw"}}>
    <Logo image={logo}/>
    <Spin indicator={<LoadingOutlined spin />} size={size} />
  </Flex>
);
