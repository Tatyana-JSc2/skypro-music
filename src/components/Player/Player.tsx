'use client';
import Link from "next/link";
import styles from "./Player.module.css";
import classNames from 'classnames';
import { TrackType } from "@/types/types";
import { useEffect, useRef, useState } from "react";


type Props = {
  track: null | TrackType;
}


export const Player = ({ track }: Props) => {
  const audioRef = useRef<null | HTMLAudioElement>(null);
  //const audioRef = useRef(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const [isLoop, setIsLoop] = useState<boolean>(false);


  const duration = audioRef.current?.duration || 0;

  // функция для воспроизведения и паузы
  const togglePlay = () => {
    // const audio = audioRef.current;
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };


  //функция которая запускает трек
  const play = () => {
    audioRef.current?.play();
    setIsPlaying(true);
  };


  //Активация зацикливания/Деактивация зацикливания
  const handleLoop = () => {
    setIsLoop((prev) => !prev);
    if (audioRef.current) audioRef.current.loop = !isLoop;
  };



  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", () =>
        setCurrentTime(audioRef.current!.currentTime));
      play();
    }
  }, [track]);


  //регулирование громкости
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);



  return (
    <div className={styles.bar}>
      <div className={styles.bar__content}>
        <audio
          ref={audioRef}
          src={track?.track_file}
        />
        {/*<div className={styles.barTime}>
         {timer(currentTime)}/{timer(duration)}
        </div>*/}
        <div className={styles.bar__player_progress} /*max={duration} value={currentTime} step={0.01} onChange={(e)=>(audioRef.current?.currentTime=Number(e.target.value))}*/></div>
        <div className={styles.bar__player_block}>
          <div className={styles.bar__player}>
            <div className={styles.player__controls}>
              <div className={styles.player__btn_prev}>
                <svg className={styles.player__btn_prev_svg}>
                  <use href="/img/icon/sprite.svg#icon-prev"></use>
                </svg>
              </div>
              <div className={classNames(styles.player__btn_play, styles._btn)}>
                <svg className={styles.player__btn_play_svg}>
                  <use href="/img/icon/sprite.svg#icon-play" onClick={togglePlay}></use>
                </svg>
              </div>
              <div className={styles.player__btn_next}>
                <svg className={styles.player__btn_next_svg}>
                  <use href="/img/icon/sprite.svg#icon-next"></use>
                </svg>
              </div>
              <div className={classNames(styles.player__btn_repeat, styles._btn_icon)}>
                <svg className={styles.player__btn_repeat_svg}>
                  <use href="/img/icon/sprite.svg#icon-repeat" onClick={handleLoop}></use>
                </svg>
              </div>
              <div className={classNames(styles.player__btn_shuffle, styles._btn_icon)}>
                <svg className={styles.player__btn_shuffle_svg}>
                  <use href="/img/icon/sprite.svg#icon-shuffle"></use>
                </svg>
              </div>
            </div>

            <div className={classNames(styles.player__track_play, styles.track_play)}>
              <div className={styles.track_play__contain}>
                <div className={styles.track_play__image}>
                  <svg className={styles.track_play__svg}>
                    <use href="/img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className={styles.track_play__author}>
                  <Link className={styles.track_play__author_link} href="http://"
                  >{track?.author}</Link>

                </div>
                <div className={styles.track_play__album}>
                  <Link className={styles.track_play__album_link} href="http://">{track?.name}</Link>
                </div>
              </div>

              <div className={styles.track_play__like_dis}>
                <div className={classNames(styles.track_play__like, styles._btn_icon)}>
                  <svg className={styles.track_play__like_svg}>
                    <use href="/img/icon/sprite.svg#icon-like"></use>
                  </svg>
                </div>
                <div className={classNames(styles.track_play__dislike, styles._btn_icon)}>
                  <svg className={styles.track_play__dislike_svg}>
                    <use
                      href="/img/icon/sprite.svg#icon-dislike"
                    ></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bar__volume_block}>
            <div className={styles.volume__content}>
              <div className={styles.volume__image}>
                <svg className={styles.volume__svg}>
                  <use href="/img/icon/sprite.svg#icon-volume"></use>
                </svg>
              </div>
              <div className={classNames(styles.volume__progress, styles._btn)}>
                <input
                  className={classNames(styles.volume__progress_line, styles._btn)}
                  type="range"
                  name="range"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}