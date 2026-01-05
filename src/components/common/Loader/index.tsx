import { Flex, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import type { LoaderProps } from './types';

export const Loader = ({size}: LoaderProps) => (
  <Flex align="center" gap="middle">
    <Spin indicator={<LoadingOutlined spin />} size={size} />
  </Flex>
);
