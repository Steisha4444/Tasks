import { ADD_SONG, DELETE_SONG, EDIT_SONG } from "../types"

export const addSong = (song) => {
    return {
        type: ADD_SONG,
        payload: song
    }
}

export const deleteSong = (id) => {
    return {
        type: DELETE_SONG,
        payload: id
    }
}

export const editSong = (song) => {
    return {
        type: EDIT_SONG,
        payload: song
    }
}