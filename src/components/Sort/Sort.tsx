import classNames from "classnames"
import styles from "./Sort.module.css";

type Props = {
    title: string;
    list: string[];
    onClick: (value: string) => void;
    value: string;
    isOpen: boolean;
}

const Sort = ({ title, list, onClick, value, isOpen }: Props) => {
    return (
        <div className={styles.filterButtonBox}>
            <button className={classNames(styles.filterButton, styles.btnText, isOpen && styles.btnTextActiv)} onClick={() => onClick(value)}>
                {title}
            </button>
            {isOpen &&
                <div className={styles.filterModal}>
                    <ul>
                        {list.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
            }
        </div>
    )
}

export default Sort
