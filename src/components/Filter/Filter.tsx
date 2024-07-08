"use client";
import { useState } from "react";
import Sort from "../Sort/Sort";
import { sortData } from "../Sort/data";
import styles from "./Filter.module.css";
//import classNames from 'classnames';
import { TrackType } from "@/types/types";
import { getUniqueValues } from "@/utils/utils";


type Props = {
    tracks: TrackType[];
}

//export function Filter(tracks: TrackType []) {
export const Filter = ({ tracks }: Props) => {
    const [filterValue, setFilterValue] = useState<null | string>(null);
    const changeFilter = (value: string) => {
        setFilterValue((prev) => prev === value ? null : value);
    }


    return (
        <div className={styles.centerblockFilter}>
            <div className={styles.filterTitle}>Искать по:</div>
            {sortData.map((item, index) =>
                <Sort
                    key={index}
                    title={item.title}
                    list={getUniqueValues({ value: item.value, tracks })}
                    onClick={changeFilter}
                    value={item.value}
                    isOpen={filterValue === item.value}
                />
            )}
        </div>
    );
}