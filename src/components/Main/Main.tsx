import { TrackType } from "@/types/types";
import { Centerblock } from "../Centerblock/Centerblock";
import { Menu } from "../Menu/Menu";
import { Player } from "../Player/Player";
import { Sidebar } from "../Sidebar/Sidebar";
import styles from "./Main.module.css";


type Props = {
    tracks: TrackType[];
    startTracks: TrackType[];
}

export const Main = ({ tracks, startTracks }: Props) => {
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <main className={styles.main}>
                    <Menu />
                    <Centerblock tracks={tracks} startTracks={startTracks}/>
                    <Sidebar />
                </main>
                    <Player  />
                <footer className={styles.footer}></footer>
            </div>
        </div>
    )
}

