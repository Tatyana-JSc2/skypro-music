import Link from "next/link";
import styles from "./Centerblock.module.css";
import classNames from 'classnames';

export const Centerblock = () => {
    return (
        <div className={styles.main__centerblock}>
            <div className={styles.centerblock__search}>
                <svg className={styles.search__svg}>
                    <use href="img/icon/sprite.svg#icon-search"></use>
                </svg>
                <input
                    className={styles.search__text}
                    type="search"
                    placeholder="Поиск"
                    name="search"
                />
            </div>
            <h2 className={styles.centerblock__h2}>Треки</h2>
            <div className={styles.centerblock__filter}>
                <div className={styles.filter__title}>Искать по:</div>
                <div className={classNames(styles.filter__button, styles.button_author, styles._btn_text)}>
                    исполнителю
                </div>
                <div className={classNames(styles.filter__button, styles.button_year, styles._btn_text)}>
                    году выпуска
                </div>
                <div className={classNames(styles.filter__button, styles.button_genre, styles._btn_text)}>жанру</div>
            </div>
            <div className={styles.centerblock__content}>
                <div className={styles.content__title}>
                    <div className={classNames(styles.playlist_title__col, styles.col01)}>Трек</div>
                    <div className={classNames(styles.playlist_title__col, styles.col02)}>Исполнитель</div>
                    <div className={classNames(styles.playlist_title__col, styles.col03)}>Альбом</div>
                    <div className={classNames(styles.playlist_title__col, styles.col04)}>
                        <svg className={styles.playlist_title__svg}>
                            <use href="img/icon/sprite.svg#icon-watch"></use>
                        </svg>
                    </div>
                </div>
                <div className={styles.content__playlist}>

                    <div className={styles.playlist__item}>
                        <div className={styles.playlist__track}>
                            <div className={styles.track__title}>
                                <div className={styles.track__title_image}>
                                    <svg className={styles.track__title_svg}>
                                        <use href="img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="http://"
                                    >Guilt <span className={styles.track__title_span}></span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="http://">Nero</Link>
                            </div>
                            <div className={styles.track__album}>
                                <link className={styles.track__album_link} href="http://"
                                >Welcome Reality</link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="img/icon/sprite.svg#icon-like"></use>
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
                                        <use href="img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="http://"
                                    >Elektro <span className={styles.track__title_span}></span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="http://">Dynoro, Outwork, Mr. Gee</Link>
                            </div>
                            <div className={styles.track__album}>
                                <link className={styles.track__album_link} href="http://"
                                >Elektro</link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="img/icon/sprite.svg#icon-like"></use>
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
                                        <use href="img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="http://"
                                    >I’m Fire <span className={styles.track__title_span}></span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="http://">Ali Bakgor</Link>
                            </div>
                            <div className={styles.track__album}>
                                <link className={styles.track__album_link} href="http://"
                                >I’m Fire</link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="img/icon/sprite.svg#icon-like"></use>
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
                                        <use href="img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="http://"
                                    >Non Stop <span className={styles.track__title_span}>(Remix)</span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="http://">Стоункат, Psychopath</Link>
                            </div>
                            <div className={styles.track__album}>
                                <link className={styles.track__album_link} href="http://"
                                >Non Stop</link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="img/icon/sprite.svg#icon-like"></use>
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
                                        <use href="img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="http://"
                                    >Run Run <span className={styles.track__title_span}>(feat. AR/CO)</span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="http://">Jaded, Will Clarke, AR/CO</Link>
                            </div>
                            <div className={styles.track__album}>
                                <link className={styles.track__album_link} href="http://"
                                >Run Run</link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="img/icon/sprite.svg#icon-like"></use>
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
                                        <use href="img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="http://"
                                    >Eyes on Fire<span className={styles.track__title_span}>(Zeds Dead Remix)</span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="http://">Blue Foundation, Zeds Dead</Link>
                            </div>
                            <div className={styles.track__album}>
                                <link className={styles.track__album_link} href="http://"
                                >Eyes on Fire</link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="img/icon/sprite.svg#icon-like"></use>
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
                                        <use href="img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="http://"
                                    >Mucho Bien<span className={styles.track__title_span}>(Hi Profile Remix)</span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="http://">HYBIT, Mr. Black, Offer Nissim, Hi Profile</Link>
                            </div>
                            <div className={styles.track__album}>
                                <link className={styles.track__album_link} href="http://"
                                >Mucho Bien</link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="img/icon/sprite.svg#icon-like"></use>
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
                                        <use href="img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="http://"
                                    >Knives n Cherries<span className={styles.track__title_span}></span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="http://">minthaze</Link>
                            </div>
                            <div className={styles.track__album}>
                                <link className={styles.track__album_link} href="http://"
                                >Captivating</link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="img/icon/sprite.svg#icon-like"></use>
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
                                        <use href="img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="http://"
                                    >Knives n Cherries<span className={styles.track__title_span}></span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="http://">minthaze</Link>
                            </div>
                            <div className={styles.track__album}>
                                <link className={styles.track__album_link} href="http://"
                                >Captivating</link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="img/icon/sprite.svg#icon-like"></use>
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
                                        <use href="img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="http://"
                                    >Knives n Cherries<span className={styles.track__title_span}></span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="http://">minthaze</Link>
                            </div>
                            <div className={styles.track__album}>
                                <link className={styles.track__album_link} href="http://"
                                >Captivating</link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="img/icon/sprite.svg#icon-like"></use>
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
                                        <use href="img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="http://"
                                    >Knives n Cherries<span className={styles.track__title_span}></span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="http://">minthaze</Link>
                            </div>
                            <div className={styles.track__album}>
                                <link className={styles.track__album_link} href="http://"
                                >Captivating</link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="img/icon/sprite.svg#icon-like"></use>
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
                                        <use href="img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="http://"
                                    >Knives n Cherries<span className={styles.track__title_span}></span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="http://">minthaze</Link>
                            </div>
                            <div className={styles.track__album}>
                                <link className={styles.track__album_link} href="http://"
                                >Captivating</link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="img/icon/sprite.svg#icon-like"></use>
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
                                        <use href="img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="http://"
                                    >Knives n Cherries<span className={styles.track__title_span}></span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="http://">minthaze</Link>
                            </div>
                            <div className={styles.track__album}>
                                <link className={styles.track__album_link} href="http://"
                                >Captivating</link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="img/icon/sprite.svg#icon-like"></use>
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
                                        <use href="img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="http://"
                                    >Knives n Cherries<span className={styles.track__title_span}></span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="http://">minthaze</Link>
                            </div>
                            <div className={styles.track__album}>
                                <link className={styles.track__album_link} href="http://"
                                >Captivating</link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="img/icon/sprite.svg#icon-like"></use>
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
                                        <use href="img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="http://"
                                    >How Deep Is Your Love<span className={styles.track__title_span}></span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="http://">Calvin Harris, Disciples</Link>
                            </div>
                            <div className={styles.track__album}>
                                <link className={styles.track__album_link} href="http://"
                                >How Deep Is Your Love</link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="img/icon/sprite.svg#icon-like"></use>
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
                                        <use href="img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="http://"
                                    >Morena<span className={styles.track__title_span}></span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="http://">Tom Boxer</Link>
                            </div>
                            <div className={styles.track__album}>
                                <link className={styles.track__album_link} href="http://"
                                >Soundz Made in Romania</link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="img/icon/sprite.svg#icon-like"></use>
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
                                        <use href="img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.track__title_text}>
                                    <Link className={styles.track__title_link} href="http://"
                                    ><span className={styles.track__title_span}></span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.track__author}>
                                <Link className={styles.track__author_link} href="http://"></Link>
                            </div>
                            <div className={styles.track__album}>
                                <link className={styles.track__album_link} href="http://"
                                ></link>

                            </div>
                            <div className={styles.track__time}>
                                <svg className={styles.track__time_svg}>
                                    <use href="img/icon/sprite.svg#icon-like"></use>
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