import { ADD_SONG, DELETE_SONG, EDIT_SONG } from "../types"
import { data } from "../../components/songs/songs"

const initialState = {
    songs: data
}

export const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SONG:
            return {
                ...state,
                songs: [...state.songs, action.payload]
            }
        case DELETE_SONG:
            return {
                ...state,
                songs: state.songs.filter(song => song.id !== action.payload)
            }
        case EDIT_SONG:
            const updateSong = state.songs.map(song => song.id === action.payload.id ? {
                ...song,
                name: action.payload.name,
                lyrics: action.payload.lyrics
            } : song)
            return {
                ...state,
                songs: updateSong
            }
        default: return state;
    }
    return state;

}