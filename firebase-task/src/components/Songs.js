import React from 'react'
import { Song } from './Song'
import { useSelector } from "react-redux"
import { useState } from 'react'

import styles from './songs.module.css'

export const Songs = () => {

    const [limit, setLimit] = useState(5);
    const [showChecked, setShowChecked] = useState(false);
    const songs = useSelector(state => state.songsList.songs);
  
    const filterCheckedSongs = (songsList) => {

        if(showChecked===null) return songsList;

        if (showChecked)  return songsList.filter((el) => el.checked);

        else return songsList.filter((el) => !el.checked);
    }

    const renderSong = filterCheckedSongs(songs).sort((a, b) => a.name.localeCompare(b.name)).slice(0, limit);

    return (
        <>
            <button className={styles.sort__btn} onClick={()=>setShowChecked(true)}>Completed</button>
            <button className={styles.sort__btn} onClick={()=>setShowChecked(false)}>Not Completed</button>
            <button className={styles.sort__btn} onClick={()=>setShowChecked(null)}>All</button>
            {
                renderSong.map(song => <Song key={song.id} song={song} />)
            }
            <button onClick={() => setLimit(limit + 5)}>Show more</button>
        </>

    )
}