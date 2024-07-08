'use client';
import { TrackType } from "@/types/types";
import { Centerblock } from "../Centerblock/Centerblock";
import { Menu } from "../Menu/Menu";
import { Player } from "../Player/Player";
import { Sidebar } from "../Sidebar/Sidebar";
import styles from "./Main.module.css";
import { useState } from "react";

type Props = {
    tracks: TrackType[];
}


export const Main = ({ tracks }: Props) => {
    const [track, setTrack] = useState<null | TrackType>(null);
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <main className={styles.main}>
                    <Menu />
                    <Centerblock tracks={tracks} setTrack={setTrack} />
                    <Sidebar />
                </main>
                {track &&
                    <Player track={track} />}
                <footer className={styles.footer}></footer>
            </div>
        </div>
    )
}

