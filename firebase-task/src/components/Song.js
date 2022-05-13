import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteSong, editSong,checkSong } from '../store/actions/actions';
import { useTheme } from "../context/ThemeContext";
import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

import styles from './song.module.css'

export const Song = ({ song }) => {
    const darkTheme = useTheme();

    const [edit, setEdit] = useState(false)
    const [value, setValue] = useState({})
    
    const dispatch = useDispatch();

    const handleDeleteSong = (id) => {
        deleteDoc(doc(db, auth.currentUser.uid, id));
        dispatch(deleteSong(id))
    }
    const handleChecked = () => {

        const updateSong = {
            ...song,
            checked: !song.checked,
        }
        dispatch(checkSong(updateSong))
        const toDoRef = doc(db, auth.currentUser.uid, updateSong.id.toString());
        setDoc(toDoRef, updateSong, { capital: true }, { merge: true });
      
      }

    const handleEditSong = (song) => {
        if (value) {
            console.log(value);
            
            const updateSong = {
                name: value.name,
                lyrics: value.lyrics,
                checked: song.checked,
                id: song.id
            }
            const toDoRef = doc(db, auth.currentUser.uid, updateSong.id.toString());
            setDoc(toDoRef, updateSong, { capital: true }, { merge: true });

            dispatch(editSong(updateSong))
            setEdit(false);

        }
        else alert("Enter data")
    }

    return (
        <div className={`${styles.songContainer} ${darkTheme ? styles.songContainerDark : styles.songContainerLight}`}>
            <div className={styles.songs__listItems}>
                <div className={styles.song__item}>
                    {edit ? (
                        <div className={styles.song__edit}>
                            <input className={styles.edit__input}
                                placeholder='name of song - artist' onChange={e => setValue({ ...value, name: e.target.value })} />
                            <br />
                            <textarea className={styles.edit__textarea} type='text' name='lyrics' placeholder='la-la-la' onChange={e => setValue({ ...value, lyrics: e.target.value })} />
                            <br />

                            <button className={styles.save__btn} onClick={() => handleEditSong(song)} > Save</button>
                            <button className={styles.cancel__btn} onClick={() => setEdit(false)} > Cancel</button>
                        </div>
                    ) : (
                        <div className={styles.song__info}>
                            <h5>{song.name}</h5>
                            <details>
                                <summary>Lyrics</summary>
                                <pre>{song.lyrics}</pre>
                            </details>
                            <input
                                type="checkbox"
                                className="pointer "
                                checked={song.checked}
                                onChange={handleChecked}
                            />
                            <button className={styles.delete__btn} onClick={() => handleDeleteSong(song.id)} > Delete</button>
                            <button className={styles.edit__btn} onClick={() => { setEdit(true); setValue(song.name) }}> Edit</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}