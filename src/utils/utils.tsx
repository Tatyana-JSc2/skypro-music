import { TrackType } from "@/types/types";

type Props = {
    tracks: TrackType[];
    value: string;
}

export function getUniqueValues({value, tracks}: Props) {
    if (value === "author") {
        return Array.from(new Set(tracks.map((track) => track.author)));
    } else if (value === "genre") {
        return Array.from(new Set(tracks.map((track) => track.genre)));
    } else {
        return Array.from(new Set(tracks.map((track) => track.release_date)));
    }
}