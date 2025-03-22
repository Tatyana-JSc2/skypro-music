'use client';
import Link from "next/link";
import styles from "./Player.module.css";
import classNames from 'classnames';
import { useEffect, useRef, useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setIsPlaying, setIsShuffle, setNextTrack, setPrevTrack, setPlaylist } from "@/store/features/playlistSlice";
import { TrackType } from "@/types/types";



export const Player = () => {
  const audioRef = useRef<null | HTMLAudioElement>(null);
  //const audioRef = useRef(null);
  //const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.5);
  const [isLoop, setIsLoop] = useState<boolean>(false);

  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
  // const isFiltered = useAppSelector((state) => state.playlist.isFiltered);
  const playlist = useAppSelector((state) => state.playlist.playlist);
  const isShuffle = useAppSelector((state) => state.playlist.isShuffle);
  const isPlaying = useAppSelector((state) => state.playlist.isPlaying);
  const dispatch = useAppDispatch();

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
      dispatch(setIsPlaying(!isPlaying));
    }
  };

  //функция которая запускает трек
  const play = () => {
    audioRef.current?.play();
    dispatch(setIsPlaying(true));
  };

  //переключение на предыдущий трек
  const prevTrack = () => {
    dispatch(setPrevTrack());
  };

  //переключение на следующий трек
  const nextTrack = () => {
    dispatch(setNextTrack());
  };

  //Активация зацикливания/Деактивация зацикливания
  const handleLoop = () => {
    if (audioRef.current) audioRef.current.loop = !isLoop;
    setIsLoop((prev) => !prev);
  };

  //перемешивание треков
  const Shuffle = () => {
    isShuffle === false ? dispatch(setIsShuffle(true)) : dispatch(setIsShuffle(false));

  };


  //передвижение ползунка
  const handleSeek = (event: any) => {
    if (audioRef.current) {
      audioRef.current.currentTime = event.target.value;
    }
  };

  //еще не реализовано!
  const notYet = () => {
    alert("еще не реализовано!");
  };

  //формат времени проигрывания трека
  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", () =>
        setCurrentTime(audioRef.current!.currentTime));
      play();
    }
  }, [currentTrack]);

  //проигрывание следующего трека после окончания предыдущего
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('ended', nextTrack);
      // Воспроизводим новый трек
      play();

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('ended', nextTrack);
        }
      };
    }
  }, [currentTrack, /*playlist*/]); /*трек запускается каждый раз, когда меняется плейлист!!!*/


  //регулирование громкости
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  //обновление плейлиста при нажатии перемешивания
  useEffect(() => {
    dispatch(setPlaylist());
  }, [isShuffle]);




  return (
    <>
      {currentTrack && (
        <div className={styles.bar}>
          <div className={styles.bar__content}>
            <audio
              ref={audioRef}
              src={currentTrack?.track_file}
            />
            <div className={styles.barTime}>
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
            {/*<div className={styles.bar__player_progress} max={duration} value={currentTime} step={0.01} onChange={(e)=>(audioRef.current?.currentTime=Number(e.target.value))}></div>*/}
            <ProgressBar
              max={duration}
              value={currentTime}
              step={0.01}
              onChange={handleSeek}
            />
            <div className={styles.bar__player_block}>
              <div className={styles.bar__player}>
                <div className={styles.player__controls}>
                  <div className={styles.player__btn_prev}>
                    <svg className={styles.player__btn_prev_svg}>
                      <use href="/img/icon/sprite.svg#icon-prev" onClick={prevTrack}></use>
                    </svg>
                  </div>
                  <div className={classNames(styles.player__btn_play, styles._btn)}>
                    <svg className={styles.player__btn_play_svg}>
                      <use href={isPlaying ? "/img/icon/sprite.svg#icon-pause" : "/img/icon/sprite.svg#icon-play"} onClick={togglePlay}></use>
                    </svg>
                  </div>
                  <div className={styles.player__btn_next}>
                    <svg className={styles.player__btn_next_svg}>
                      <use href="/img/icon/sprite.svg#icon-next" onClick={nextTrack}></use>
                    </svg>
                  </div>
                  <div className={classNames(styles.player__btn_repeat, styles._btn_icon)}>
                    <svg className={isLoop === true ? styles._btn_iconActive : styles.player__btn_repeat_svg}>
                      <use href="/img/icon/sprite.svg#icon-repeat" onClick={handleLoop}></use>
                    </svg>
                  </div>
                  <div className={classNames(styles.player__btn_shuffle, styles._btn_icon)}>
                    <svg className={isShuffle === true ? styles.player__btn_shuffle_svgInit : styles.player__btn_shuffle_svg}>
                      <use href="/img/icon/sprite.svg#icon-shuffle" onClick={Shuffle}></use>
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
                      >{currentTrack?.author}</Link>

                    </div>
                    <div className={styles.track_play__album}>
                      <Link className={styles.track_play__album_link} href="http://">{currentTrack?.name}</Link>
                    </div>
                  </div>

                  <div className={styles.track_play__like_dis}>
                    <div className={classNames(styles.track_play__like, styles._btn_icon)}>
                      <svg className={styles.track_play__like_svg}>
                        <use href="/img/icon/sprite.svg#icon-like" onClick={notYet}></use>
                      </svg>
                    </div>
                    <div className={classNames(styles.track_play__dislike, styles._btn_icon)}>
                      <svg className={styles.track_play__dislike_svg}>
                        <use
                          href="/img/icon/sprite.svg#icon-dislike" onClick={notYet}
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
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={(e: any) => setVolume(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}