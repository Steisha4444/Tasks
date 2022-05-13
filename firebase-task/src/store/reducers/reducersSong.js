import { ADD_SONGS,ADD_SONG, DELETE_SONG, EDIT_SONG,CHECK_SONG } from "../types"

const initialState = {
    songs: []
}

export const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SONG:
           
            return {
                ...state,
                songs: [...state.songs, action.payload]
            }
            case CHECK_SONG:
                const updatedSong = state.songs.map(song => song.id === action.payload.id ?  action.payload : song)
                console.log("vv",action.payload);
                return {
                    ...state,
                    songs: updatedSong
                }
            case ADD_SONGS:
                return {
                    ...state,
                    songs:  action.payload
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