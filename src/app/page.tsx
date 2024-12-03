'use client';
import { getTracks } from "@/api/userApi";
import { Main } from "@/components/Main/Main";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setPlaylist } from "@/store/features/playlistSlice";
import { TrackType } from "@/types/types";
import { useEffect } from "react";



export default function Home() {
  const dispatch = useAppDispatch();
  const isShuffle = useAppSelector((state) => state.playlist.isShuffle);


  // получение треков и перемешивание треков (изменение плейлиста)
  useEffect(() => {
    getTracks()
      .then((tracks) => dispatch(setPlaylist({ tracks })))
      .catch((error) => {
        alert(error.message);
      });
  }, [isShuffle]);

  const tracks: TrackType[] = useAppSelector((state) => state.playlist.playlist);


  return (
    <Main tracks={tracks} />
  );
}
