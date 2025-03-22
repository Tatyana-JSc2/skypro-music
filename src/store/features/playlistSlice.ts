import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TrackType } from "@/types/types";

type PlaylistStateType = {
    currentTrack: null | TrackType;
    nullCurrentTrack: null;
    playlist: TrackType[];
    startPlaylist: TrackType[];
    shuffledPlaylist: TrackType[];
    isShuffle: boolean;
    isPlaying: boolean;
    isFiltered: boolean;
    filterOptions: {
       // author: string[],
        clickFilter: string[],
        searchValue: string,
    };
   // filteredTracks: TrackType[],
    
}


const initialState: PlaylistStateType = {
    currentTrack: null,
    nullCurrentTrack: null,
    playlist: [],
    startPlaylist: [],
    shuffledPlaylist: [],
    isShuffle: false,
    isPlaying: false,
    isFiltered: false,
    filterOptions: {
       // author: [],
        clickFilter: [],
        searchValue: "",
    },
    //filteredTracks: [],
};

const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        setCurrentTrack: (state, action: PayloadAction<{ item: TrackType, tracks: TrackType[] }>) => {
            state.currentTrack = action.payload.item;
            state.playlist = action.payload.tracks;
            //const playlist = state.isFiltered ? action.payload.filteredTracks : action.payload.tracks;
            //state.playlist = playlist;
            //state.shuffledPlaylist = state.isFiltered ? [...action.payload.filteredTracks].sort(() => 0.5 - Math.random()) : [...action.payload.tracks].sort(() => 0.5 - Math.random());
            state.shuffledPlaylist = [...action.payload.tracks].sort(() => 0.5 - Math.random());
        },
        setNextTrack: (state) => {
            if (state.isShuffle) {
                const playlist = state.shuffledPlaylist;
                const randomNumber = Math.floor(Math.random() * (playlist.length - 1 + 1)) + 1;
                const newTrack = playlist[randomNumber];
                if (newTrack) {
                    state.currentTrack = newTrack;
                }
            } else {
                //const playlist = state.isShuffle ? state.shuffledPlaylist : state.playlist;
                const playlist = state.playlist;
                const currentTrackIndex = playlist.findIndex((item) => item._id === state.currentTrack?._id);
                const newTrack = playlist[currentTrackIndex < (playlist.length - 1) ? currentTrackIndex + 1 : 0];
                if (newTrack) {
                    state.currentTrack = newTrack;
                }
            }
        },
        setPrevTrack: (state) => {
            if (state.isShuffle) {
                const playlist = state.shuffledPlaylist;
                const randomNumber = Math.floor(Math.random() * (playlist.length - 1 + 1)) + 1;
                const newTrack = playlist[randomNumber];
                if (newTrack) {
                    state.currentTrack = newTrack;
                }
            } else {
                const playlist = state.playlist;
                const currentTrackIndex = playlist.findIndex((item) => item._id === state.currentTrack?._id);
                const newTrack = playlist[currentTrackIndex - 1];
                if (newTrack) {
                    state.currentTrack = newTrack;
                }
            }
        },
        setIsShuffle: (state, action: PayloadAction<boolean>) => {
            state.isShuffle = action.payload;
        },
        setIsPlaying: (state, action: PayloadAction<boolean>) => {
            state.isPlaying = action.payload;
        },
        setIsFiltered: (state, action: PayloadAction<boolean>) => {
            state.isFiltered = action.payload;
           

        },
        setNullCurrentTrack: (state) => {
            state.currentTrack = state.nullCurrentTrack;    
        },
        setStartPlaylist: (state, action: PayloadAction<{ tracks: TrackType[] }>) => {
            state.startPlaylist = action.payload.tracks;
            //state.filteredTracks = action.payload.tracks;
            state.playlist = action.payload.tracks;
            /* if (state.isFiltered) {
                 state.playlist = state.filteredTracks;
             };
             const playlist = state.isShuffle ? state.shuffledPlaylist : state.playlist;
             state.playlist = playlist;*/
            //state.startPlaylist = playlist;
        },
        //заменен плейлист на стартплейлист, но не работает перемешивание

        setPlaylist: (state) => {
            const playlist = state.isShuffle ? state.shuffledPlaylist : state.playlist;
            state.playlist = playlist;
         },

        //setPlaylist: (state, action: PayloadAction<{ tracks: TrackType[] }>) => {
        //    state.playlist = action.payload.tracks;
        //    const playlist = state.isShuffle ? state.shuffledPlaylist : state.playlist;
        //    state.playlist = playlist;
        // },

       /* setFilters: (state, action: PayloadAction<{ author?: string[], searchValue?: string }>) => {
            state.filterOptions = {
                author: action.payload.author || state.filterOptions.author,
                searchValue: action.payload.searchValue || state.filterOptions.searchValue,
            };
            state.playlist = state.startPlaylist.filter((item) => {
                const hasAuthors = state.filterOptions.author.length !== 0;
                const playlist = hasAuthors ? state.filterOptions.author.includes(item.author) : true;
                return playlist;
            });
        },*/

        setFilters: (state, action: PayloadAction<{ clickFilter?: string[], searchValue?: string }>) => {
            state.filterOptions = {
                clickFilter: action.payload.clickFilter || state.filterOptions.clickFilter,
                searchValue: action.payload.searchValue || state.filterOptions.searchValue,
            };
            state.playlist = state.startPlaylist.filter((item) => {
                const hasClickFilters = state.filterOptions.clickFilter.length !== 0;
                const playlist = hasClickFilters ? state.filterOptions.clickFilter.includes(item.author || item.genre || item.release_date) : true;
                return playlist;
            });
        },




        //setFilteredTracks: (state, action: PayloadAction<{ item: TrackType, tracks: TrackType[] }>) => {
        //    const playlist = state.playlist;
        //    const filteredTracks = playlist.filter((item) => state.filterOptions.author.includes(item.author));
        //    state.filteredTracks = filteredTracks;
        // },
        //setInitialTracks: (state, action: PayloadAction<{ initialTracks: TrackType[] }>) => {
        //    state.initialTracks = action.payload.initialTracks;
        // },
    },
});

export const { setCurrentTrack, setNullCurrentTrack, setNextTrack, setIsShuffle, setIsPlaying, setPrevTrack, setStartPlaylist, setPlaylist, setFilters, setIsFiltered /*setFilteredTracks, *setInitialTracks*/ } = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;