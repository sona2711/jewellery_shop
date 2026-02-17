
import {Select, Slider } from "antd";
import { useTranslation } from "react-i18next";

import type { FilterProps, FilterValues } from "./types";
import { CATEGORY_OPTIONS, METAL_OPTIONS, STONE_OPTIONS, AVAILABILITY_OPTIONS, PRICE_MIN, PRICE_MAX } from "./const";
import { isValidPriceRange } from "./utils";
import styles from "./styles.module.css";



export const Filters = ({ value, onChange }: FilterProps) => {
    const { t } = useTranslation();

    const update = (patch: Partial<FilterValues>) => {
        onChange({ ...value, ...patch });
    };
    
    const handleChange = (price : number[]) => {

        if (Array.isArray(price) && price.length === 2) {
          const priceTuple: [number, number] = [price[0], price[1]];
          if (isValidPriceRange(priceTuple)) {
            update({ price: priceTuple });
          }
        }
      }

return (
        <div className={styles.filters}>

                <Select
                className={styles.select}
                allowClear
                placeholder={t("filters.category.label")}
                value={value?.category}
                onChange={(category) => update({ category })}
                options={CATEGORY_OPTIONS.map(o => ({
                value: o.value,
                label: t(o.labelKey),
                }))}
                />
           
                <Select
                className={styles.select}
                allowClear
                placeholder={t("filters.metal.label")}
                value={value?.metal}
                onChange={(metal) => update({ metal })}
                options={METAL_OPTIONS.map(o => ({
                value: o.value,
                label: t(o.labelKey),
                }))}
                />
                <Select
                className={styles.select}
                allowClear
                placeholder={t("filters.stone.label")}
                value={value?.stone}
                onChange={(stone) => update({ stone })}
                options={STONE_OPTIONS.map(o => ({
                value: o.value,
                label: t(o.labelKey),
                }))}
                />
                <Slider
                range
                min={PRICE_MIN}
                max={PRICE_MAX}
                value={value?.price}
                onChange={handleChange}
                />
                <Select
                className={styles.select}
                allowClear
                placeholder={t("filters.availability.label")}
                value={value?.availability}
                onChange={(availability) => update({ availability })}
                options={AVAILABILITY_OPTIONS.map(o => ({
                value: o.value,
                label: t(o.labelKey),
                }))}
                />
            </div>
    )}








