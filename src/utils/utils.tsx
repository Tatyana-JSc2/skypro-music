//'use client';
import { TrackType } from "@/types/types";
import { order } from "@/components/Sort/data";
//import { useAppDispatch, useAppSelector} from "@/hooks";
//import { setFilters } from "@/store/features/playlistSlice";
//import { useEffect } from "react";

type Props = {
    tracks: TrackType[];
    value: string;
}

export function getUniqueValues({ value, tracks }: Props) {

    //const currentsearchValue = useAppSelector((state) => state.playlist.filterOptions.searchValue);
    // const dispatch = useAppDispatch();

    //useEffect(() => {
    //  dispatch(setFilters({searchValue: value}));
    // alert (`Вы кликнули на: ${value}`);
    // }, []); 


    if (value === "author") {
        //dispatch(setFilters({searchValue: "author"}));             
        return Array.from(new Set(tracks.map((track) => track.author)));
    } else if (value === "genre") {
        // dispatch(setFilters({searchValue: "genre"}));
        return Array.from(new Set(tracks.map((track) => track.genre.join(' '))));
    } else {
        // dispatch(setFilters({searchValue: "release_date"}));
        return Array.from(new Set(order));

        //return Array.from(new Set(tracks.map((track) => track.release_date)));
    }
}