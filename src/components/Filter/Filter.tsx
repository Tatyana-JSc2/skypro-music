"use client";
import { useState } from "react";
import Sort from "../Sort/Sort";
import { sortData } from "../Sort/data";
import styles from "./Filter.module.css";
//import classNames from 'classnames';
import { TrackType } from "@/types/types";
import { getUniqueValues } from "@/utils/utils";
import { setPlaylist, setFilters} from "@/store/features/playlistSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";


type Props = {
    tracks: TrackType[];
}

//export function Filter(tracks: TrackType []) {
export const Filter = ({ tracks }: Props) => {
    const [filterValue, setFilterValue] = useState<null | string>(null);
    const dispatch = useAppDispatch();

    const changeFilter = (value: string) => {
        setFilterValue((prev) => prev === value ? null : value);
        dispatch(setFilters({searchValue: value}));
        dispatch(setFilters({ clickFilter: [] }));
        alert (`Вы кликнули на: ${value}`);
        ///dispatch(setPlaylist()); 
           
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