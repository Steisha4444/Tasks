import React from 'react'
import { Song } from './Song'

export const Songs = ({ songs }) => {
    return (
        <>
            {
                songs.map(song => <Song key={song.id} song={song} />)
            }
        </>

    )
}
