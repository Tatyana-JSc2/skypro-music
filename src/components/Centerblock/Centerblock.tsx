'use client';
import Link from "next/link";
import styles from "./Centerblock.module.css";
import classNames from 'classnames';
//import { getTracks } from "@/api/userApi";
import { TrackType } from "@/types/types";
import { Filter } from "../Filter/Filter";
import { Search } from "../Search/Search";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setCurrentTrack } from "@/store/features/playlistSlice";


type Props = {
    tracks: TrackType[];
}
//type Prop = {
//  setTrack: (item: null|TrackType) => void;   
//}


export const Centerblock = ({ tracks }: Props) => {

    const dispatch = useAppDispatch();
    const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
    const isPlaying = useAppSelector((state) => state.playlist.isPlaying);

    const Selected = (item: TrackType) => {
        const Select = currentTrack ? currentTrack._id === item._id : false;
        return Select;
    };

    //const [tracks, setTracks]=useState([]);

    //useEffect(()=>{
    //    getTracks()
    //    .then((res)=>setTracks(res))
    //    .catch((error)=>{
    //        alert(error.message);
    //    });
    //},[]);

    // const tracks: TrackType[] = await getTracks();
    //console.log(Tracks); // т.к. компонент серверный, эту строчку в браузере мы не увидим, а увидим на сервере(в terminal)

    return (
        <div className={styles.mainCenterblock}>
            <Search />
            <h2 className={styles.centerblockHead}>Треки</h2>
            <Filter tracks={tracks} />
            <div className={styles.centerblockContent}>
                <div className={styles.contentTitle}>
                    <div className={classNames(styles.playlistTCitleCol, styles.col01)}>Трек</div>
                    <div className={classNames(styles.playlistTCitleCol, styles.col02)}>Исполнитель</div>
                    <div className={classNames(styles.playlistTCitleCol, styles.col03)}>Альбом</div>
                    <div className={classNames(styles.playlistTCitleCol, styles.col04)}>
                        <svg className={styles.playlistTitleSvg}>
                            <use href="/img/icon/sprite.svg#icon-watch"></use>
                        </svg>
                    </div>
                </div>
                <div className={styles.contentPlaylist}>
                    {tracks.map((item, index: number) => {
                        return (
                            <div className={styles.playlist__item} key={index} onClick={() => dispatch(setCurrentTrack({ item, tracks }))} >
                                <div className={styles.playlist__track}>
                                    <div className={styles.track__title}>
                                        <div className={styles.track__title_image}>
                                            <svg className={Selected(item) === true ? (isPlaying ? styles.track__title_svgSelected : styles.track__title_svgSelectedPause) : styles.track__title_svg}>
                                                <use href={Selected(item) === false ? "/img/icon/sprite.svg#icon-note" : ""}></use>
                                            </svg>
                                        </div>
                                        <div className={styles.track__title_text}>
                                            <Link className={styles.track__title_link} href="#"
                                            >{item.name}<span className={styles.track__title_span}></span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={styles.track__author}>
                                        <Link className={styles.track__author_link} href="#">{item.author}</Link>
                                    </div>
                                    <div className={styles.track__album}>
                                        <Link className={styles.track__album_link} href="#"
                                        >{item.album}</Link>

                                    </div>
                                    <div className={styles.track__time}>
                                        <svg className={styles.track__time_svg}>
                                            <use href="/img/icon/sprite.svg#icon-like"></use>
                                        </svg>
                                        <span className={styles.track__time_text}>{item.duration_in_seconds}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}