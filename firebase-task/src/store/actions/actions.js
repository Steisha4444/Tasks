import { ADD_SONG,ADD_SONGS, DELETE_SONG, EDIT_SONG , CHECK_SONG} from "../types"

export const addSong = (song) => {
    return {
        type: ADD_SONG,
        payload: song
    }
}

export const addSongs = (songs) => {
    return {
        type: ADD_SONGS,
        payload: songs
    }
}

export const deleteSong = (id) => {
    return {
        type: DELETE_SONG,
        payload: id
    }
}

export const checkSong = (song) => {
    return {
        type: CHECK_SONG,
        payload: song
    }
}

export const editSong = (song) => {
    return {
        type: EDIT_SONG,
        payload: song
    }
}