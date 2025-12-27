import { Row, Col, Select } from "antd";
import { useTranslation } from 'react-i18next';
import type { SortProps } from "./types";
import styles from './styles.module.css';

const { Option } = Select;

export const AppSort = ({ options, value, onChange, placeholderKey }: SortProps)=>{
    const {t}= useTranslation();

  
    return(
        <Row  className={styles.sort} gutter={[16, 16]} align="middle">
            <Col>
                <Select
                value={value}
                onChange={onChange}
                placeholder={placeholderKey ? t(placeholderKey) : t("select.sort")}
                style={{ minWidth: 150 }}
                allowClear
                >
                    {options.map((option) => (
                        <Option className={styles.option} key={option.value} value={option.value}>
                            {t(option.labelKey)}
                        </Option>
                    ))}
                </Select>
            </Col>
        </Row>
    )
}









