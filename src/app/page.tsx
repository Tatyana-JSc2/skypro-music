'use client';
import { getTracks } from "@/api/userApi";
import { Main } from "@/components/Main/Main";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setStartPlaylist } from "@/store/features/playlistSlice";
import { TrackType } from "@/types/types";
import { useEffect } from "react";



export default function Home() {
  const dispatch = useAppDispatch();
  const isShuffle = useAppSelector((state) => state.playlist.isShuffle);


  // получение треков и перемешивание треков (изменение плейлиста)
  useEffect(() => {
    getTracks()
      .then((tracks) => dispatch(setStartPlaylist({ tracks })))
      .catch((error) => {
        alert(error.message);
      });
  }, [dispatch]);

  const startTracks: TrackType[] = useAppSelector((state) => state.playlist.startPlaylist);
  const tracks: TrackType[] = useAppSelector((state) => state.playlist.playlist);

 // useEffect(() => {
 //   dispatch(setPlaylist({ tracks }));   
 // }, [tracks, isShuffle]);


  return (
    <Main tracks={tracks} startTracks={startTracks}/>
  );
}
