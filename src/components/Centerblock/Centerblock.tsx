'use client';
import Link from "next/link";
import styles from "./Centerblock.module.css";
import classNames from 'classnames';
//import { useEffect, useState } from "react";
import { getTracks } from "@/api/userApi";
//import { TrackType } from "@/types/types";
import { Filter } from "../Filter/Filter";
import { Search } from "../Search/Search";
import { TrackType } from "@/types/types";


type Props = {
    tracks: TrackType[];  
    setTrack: (item: null|TrackType) => void;   
  }
  //type Prop = {
  //  setTrack: (item: null|TrackType) => void;   
  //}


export const Centerblock = ({tracks, setTrack}:Props) => {

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
                            <div className={styles.playlist__item} key={index} onClick={() => setTrack(item)}>
                                <div className={styles.playlist__track}>
                                    <div className={styles.track__title}>
                                        <div className={styles.track__title_image}>
                                            <svg className={styles.track__title_svg}>
                                                <use href="/img/icon/sprite.svg#icon-note"></use>
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
                    <div className={styles.playlist__item}>
                        <div className={styles.playlist__track}>
                            <div className={styles.track__title}>
                                <div className={styles.track__title_image}>
                                    <svg className={styles.track__title_svg}>
                                        <use href="/img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="#"
                                    >Guilt<span className={styles.track__title_span}></span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="#">Nero</Link>
                            </div>
                            <div className={styles.track__album}>
                                <Link className={styles.track__album_link} href="#"
                                >Welcome Reality</Link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="/img/icon/sprite.svg#icon-like"></use>
                                </svg>
                                <span className={styles.track__time_text}>4:44</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.playlist__item}>
                        <div className={styles.playlist__track}>
                            <div className={styles.track__title}>
                                <div className={styles.track__title_image}>
                                    <svg className={styles.track__title_svg}>
                                        <use href="/img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="#"
                                    >Elektro <span className={styles.track__title_span}></span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="#">Dynoro, Outwork, Mr. Gee</Link>
                            </div>
                            <div className={styles.track__album}>
                                <Link className={styles.track__album_link} href="#"
                                >Elektro</Link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="/img/icon/sprite.svg#icon-like"></use>
                                </svg>
                                <span className={styles.track__time_text}>2:22</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.playlist__item}>
                        <div className={styles.playlist__track}>
                            <div className={styles.track__title}>
                                <div className={styles.track__title_image}>
                                    <svg className={styles.track__title_svg}>
                                        <use href="/img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="#"
                                    >I’m Fire <span className={styles.track__title_span}></span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="#">Ali Bakgor</Link>
                            </div>
                            <div className={styles.track__album}>
                                <Link className={styles.track__album_link} href="#"
                                >I’m Fire</Link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="/img/icon/sprite.svg#icon-like"></use>
                                </svg>
                                <span className={styles.track__time_text}>2:22</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.playlist__item}>
                        <div className={styles.playlist__track}>
                            <div className={styles.track__title}>
                                <div className={styles.track__title_image}>
                                    <svg className={styles.track__title_svg}>
                                        <use href="/img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="#"
                                    >Non Stop <span className={styles.track__title_span}>(Remix)</span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="#">Стоункат, Psychopath</Link>
                            </div>
                            <div className={styles.track__album}>
                                <Link className={styles.track__album_link} href="#"
                                >Non Stop</Link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="/img/icon/sprite.svg#icon-like"></use>
                                </svg>
                                <span className={styles.track__time_text}>4:12</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.playlist__item}>
                        <div className={styles.playlist__track}>
                            <div className={styles.track__title}>
                                <div className={styles.track__title_image}>
                                    <svg className={styles.track__title_svg}>
                                        <use href="/img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="#"
                                    >Run Run <span className={styles.track__title_span}>(feat. AR/CO)</span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="#">Jaded, Will Clarke, AR/CO</Link>
                            </div>
                            <div className={styles.track__album}>
                                <Link className={styles.track__album_link} href="#"
                                >Run Run</Link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="/img/icon/sprite.svg#icon-like"></use>
                                </svg>
                                <span className={styles.track__time_text}>2:54</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.playlist__item}>
                        <div className={styles.playlist__track}>
                            <div className={styles.track__title}>
                                <div className={styles.track__title_image}>
                                    <svg className={styles.track__title_svg}>
                                        <use href="/img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="#"
                                    >Eyes on Fire<span className={styles.track__title_span}>(Zeds Dead Remix)</span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="#">Blue Foundation, Zeds Dead</Link>
                            </div>
                            <div className={styles.track__album}>
                                <Link className={styles.track__album_link} href="#"
                                >Eyes on Fire</Link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="/img/icon/sprite.svg#icon-like"></use>
                                </svg>
                                <span className={styles.track__time_text}>5:20</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.playlist__item}>
                        <div className={styles.playlist__track}>
                            <div className={styles.track__title}>
                                <div className={styles.track__title_image}>
                                    <svg className={styles.track__title_svg}>
                                        <use href="/img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="#"
                                    >Mucho Bien<span className={styles.track__title_span}>(Hi Profile Remix)</span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="#">HYBIT, Mr. Black, Offer Nissim, Hi Profile</Link>
                            </div>
                            <div className={styles.track__album}>
                                <Link className={styles.track__album_link} href="#"
                                >Mucho Bien</Link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="/img/icon/sprite.svg#icon-like"></use>
                                </svg>
                                <span className={styles.track__time_text}>3:41</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.playlist__item}>
                        <div className={styles.playlist__track}>
                            <div className={styles.track__title}>
                                <div className={styles.track__title_image}>
                                    <svg className={styles.track__title_svg}>
                                        <use href="/img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="#"
                                    >Knives n Cherries<span className={styles.track__title_span}></span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="#">minthaze</Link>
                            </div>
                            <div className={styles.track__album}>
                                <Link className={styles.track__album_link} href="#"
                                >Captivating</Link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="/img/icon/sprite.svg#icon-like"></use>
                                </svg>
                                <span className={styles.track__time_text}>1:48</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.playlist__item}>
                        <div className={styles.playlist__track}>
                            <div className={styles.track__title}>
                                <div className={styles.track__title_image}>
                                    <svg className={styles.track__title_svg}>
                                        <use href="/img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="#"
                                    >Knives n Cherries<span className={styles.track__title_span}></span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="#">minthaze</Link>
                            </div>
                            <div className={styles.track__album}>
                                <Link className={styles.track__album_link} href="#"
                                >Captivating</Link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="/img/icon/sprite.svg#icon-like"></use>
                                </svg>
                                <span className={styles.track__time_text}>1:48</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.playlist__item}>
                        <div className={styles.playlist__track}>
                            <div className={styles.track__title}>
                                <div className={styles.track__title_image}>
                                    <svg className={styles.track__title_svg}>
                                        <use href="/img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="#"
                                    >Knives n Cherries<span className={styles.track__title_span}></span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="#">minthaze</Link>
                            </div>
                            <div className={styles.track__album}>
                                <Link className={styles.track__album_link} href="#"
                                >Captivating</Link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="/img/icon/sprite.svg#icon-like"></use>
                                </svg>
                                <span className={styles.track__time_text}>1:48</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.playlist__item}>
                        <div className={styles.playlist__track}>
                            <div className={styles.track__title}>
                                <div className={styles.track__title_image}>
                                    <svg className={styles.track__title_svg}>
                                        <use href="/img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="#"
                                    >Knives n Cherries<span className={styles.track__title_span}></span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="#">minthaze</Link>
                            </div>
                            <div className={styles.track__album}>
                                <Link className={styles.track__album_link} href="#"
                                >Captivating</Link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="/img/icon/sprite.svg#icon-like"></use>
                                </svg>
                                <span className={styles.track__time_text}>1:48</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.playlist__item}>
                        <div className={styles.playlist__track}>
                            <div className={styles.track__title}>
                                <div className={styles.track__title_image}>
                                    <svg className={styles.track__title_svg}>
                                        <use href="/img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="#"
                                    >Knives n Cherries<span className={styles.track__title_span}></span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="#">minthaze</Link>
                            </div>
                            <div className={styles.track__album}>
                                <Link className={styles.track__album_link} href="#"
                                >Captivating</Link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="/img/icon/sprite.svg#icon-like"></use>
                                </svg>
                                <span className={styles.track__time_text}>1:48</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.playlist__item}>
                        <div className={styles.playlist__track}>
                            <div className={styles.track__title}>
                                <div className={styles.track__title_image}>
                                    <svg className={styles.track__title_svg}>
                                        <use href="/img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="#"
                                    >Knives n Cherries<span className={styles.track__title_span}></span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="#">minthaze</Link>
                            </div>
                            <div className={styles.track__album}>
                                <Link className={styles.track__album_link} href="#"
                                >Captivating</Link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="/img/icon/sprite.svg#icon-like"></use>
                                </svg>
                                <span className={styles.track__time_text}>1:48</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.playlist__item}>
                        <div className={styles.playlist__track}>
                            <div className={styles.track__title}>
                                <div className={styles.track__title_image}>
                                    <svg className={styles.track__title_svg}>
                                        <use href="/img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="#"
                                    >Knives n Cherries<span className={styles.track__title_span}></span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="#">minthaze</Link>
                            </div>
                            <div className={styles.track__album}>
                                <Link className={styles.track__album_link} href="#"
                                >Captivating</Link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="/img/icon/sprite.svg#icon-like"></use>
                                </svg>
                                <span className={styles.track__time_text}>1:48</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.playlist__item}>
                        <div className={styles.playlist__track}>
                            <div className={styles.track__title}>
                                <div className={styles.track__title_image}>
                                    <svg className={styles.track__title_svg}>
                                        <use href="/img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="#"
                                    >How Deep Is Your Love<span className={styles.track__title_span}></span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="#">Calvin Harris, Disciples</Link>
                            </div>
                            <div className={styles.track__album}>
                                <Link className={styles.track__album_link} href="#"
                                >How Deep Is Your Love</Link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="/img/icon/sprite.svg#icon-like"></use>
                                </svg>
                                <span className={styles.track__time_text}>3:32</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.playlist__item}>
                        <div className={styles.playlist__track}>
                            <div className={styles.track__title}>
                                <div className={styles.track__title_image}>
                                    <svg className={styles.track__title_svg}>
                                        <use href="/img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="#"
                                    >Morena<span className={styles.track__title_span}></span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="#">Tom Boxer</Link>
                            </div>
                            <div className={styles.track__album}>
                                <Link className={styles.track__album_link} href="#"
                                >Soundz Made in Romania</Link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="/img/icon/sprite.svg#icon-like"></use>
                                </svg>
                                <span className={styles.track__time_text}>3:36</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.playlist__item}>
                        <div className={styles.playlist__track}>
                            <div className={styles.track__title}>
                                <div className={styles.track__title_image}>
                                    <svg className={styles.track__title_svg}>
                                        <use href="/img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="#"
                                    ><span className={styles.track__title_span}></span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="#"></Link>
                            </div>
                            <div className={styles.track__album}>
                                <Link className={styles.track__album_link} href="#"
                                ></Link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="/img/icon/sprite.svg#icon-like"></use>
                                </svg>
                                <span className={styles.track__time_text}></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}