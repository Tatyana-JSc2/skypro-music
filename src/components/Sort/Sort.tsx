import classNames from "classnames"
import styles from "./Sort.module.css";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setFilters, setIsFiltered, setIsShuffle, setNullCurrentTrack } from "@/store/features/playlistSlice";

type Props = {
    title: string;
    list: string[];
    onClick: (value: string) => void;
    value: string;
    isOpen: boolean;
}

const Sort = ({ title, list, onClick, value, isOpen }: Props) => {

    const clickFilterList = useAppSelector((state) => state.playlist.filterOptions.clickFilter);
    const dispatch = useAppDispatch();

    /*const handleClick = (item: string) => {
        dispatch(setFilters({ author: authorList.includes(item) ? authorList.filter((el) => el !== item) : [...authorList, item] }));
        if (authorList) {
            dispatch(setIsFiltered(true));
            dispatch(setIsShuffle(false));
            dispatch(setNullCurrentTrack()); //плеер закрывается
        };
        alert(`Вы кликнули на: ${item}`);
    };*/

    const handleClick = (item: string) => {
        dispatch(setFilters({ clickFilter: clickFilterList.includes(item) ? clickFilterList.filter((el) => el !== item) : [...clickFilterList, item] }));
        if (clickFilterList) {
            dispatch(setIsFiltered(true));
            dispatch(setIsShuffle(false));
            dispatch(setNullCurrentTrack()); //плеер закрывается
        };
        alert(`Вы кликнули на: ${item}`);
    };





    return (
        <div className={styles.filterButtonBox}>
            <button className={classNames(styles.filterButton, styles.btnText, isOpen && styles.btnTextActiv)} onClick={() => onClick(value)}>
                {title}
            </button>
            {isOpen &&
                <div className={styles.filterModal}>
                    <ul>
                        {list.map((item, index) => <li key={index} onClick={() => handleClick(item)} style={{ cursor: 'pointer' }}>{item}</li>)}
                    </ul>
                </div>
            }
        </div>
    )
}

export default Sort
