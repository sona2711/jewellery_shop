import { Button, Result, Space } from 'antd';
import { FrownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


import type { NotFoundProps } from './types';
import { NOT_FOUND_ROUTES, NOT_FOUND_TEXT_KEYS } from './const';
import styles from './styles.module.css';



export const NotFound = ({ className }:NotFoundProps) => {
    const { t } = useTranslation();


    return (
        <div className={`${styles.wrapper} ${className ?? ''}`}>
            <Result
            status="error" //status="404"
            title={t(NOT_FOUND_TEXT_KEYS.title)}
            subTitle={t(NOT_FOUND_TEXT_KEYS.subtitle)}
            icon={<FrownOutlined />}
            extra={
                <Space>
                    <Button type="primary">
                        <Link to={NOT_FOUND_ROUTES.home}>
                            {t(NOT_FOUND_TEXT_KEYS.home)}
                        </Link>
                    </Button>
                    <Button>
                        <Link to={NOT_FOUND_ROUTES.catalog}>
                            {t(NOT_FOUND_TEXT_KEYS.catalog)}
                        </Link>
                    </Button>
                </Space>
            }
        />
    </div>
    );

};