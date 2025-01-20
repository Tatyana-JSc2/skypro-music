import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TrackType } from "@/types/types";

type PlaylistStateType = {
    currentTrack: null | TrackType;
    playlist: TrackType[];
    shuffledPlaylist: TrackType[];
    isShuffle: boolean;
    isPlaying: boolean;
}


const initialState: PlaylistStateType = {
    currentTrack: null,
    playlist: [],
    shuffledPlaylist: [],
    isShuffle: false,
    isPlaying: false,
};

const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        setCurrentTrack: (state, action: PayloadAction<{ item: TrackType, tracks: TrackType[] }>) => {
            state.currentTrack = action.payload.item;
            state.playlist = action.payload.tracks;
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
        setPlaylist: (state, action: PayloadAction<{ tracks: TrackType[] }>) => {
            state.playlist = action.payload.tracks;
            const playlist = state.isShuffle ? state.shuffledPlaylist : state.playlist;
            state.playlist = playlist;
        },
    },
});

export const { setCurrentTrack, setNextTrack, setIsShuffle, setIsPlaying, setPrevTrack, setPlaylist } = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;