import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addSong } from '../store/actions/actions';
import styles from './form.module.css'
import { useTheme } from "../context/ThemeContext";


export const Form = () => {

    const darkTheme = useTheme();

    const [value, setValue] = useState({ name: '', lyrics: '' });
    const [isValid, setIsValid] = useState(false);

    const dispatch = useDispatch();

    const handleFormChange = (e) => {

        setIsValid(value.name.length > 2 && value.lyrics.length > 5)

    }
    const handleAddSong = (e) => {
        e.preventDefault();

        if (value.name.trim() === "" || value.lyrics.trim() === "") return;
        else {

            const newSong = {
                name: value.name,
                lyrics: value.lyrics,
                id: Math.floor(Math.random() * 10)
            }
            
            dispatch(addSong(newSong));
            setValue('');
            document.getElementById("name").value = "";
            document.getElementById("lyrics").value = "";
        }
    }

    return (
        <div>
            <form className={`${styles.form} ${darkTheme ? styles.darkThemeForm : styles.lightThemeForm}`}
                onChange={handleFormChange}>
                <input className={styles.form__input} id='name' type='text' name='name' placeholder='song name - artist ' onChange={e => setValue({ ...value, name: e.target.value })} />
                <br />
                <textarea className={styles.form__textarea} id='lyrics' type='text' name='lyrics' placeholder='la-la-la' onChange={e => setValue({ ...value, lyrics: e.target.value })} />
                <button className={styles.form__btn} type='submit' onClick={handleAddSong} disabled={!isValid}>Add</button>
            </form>

        </div>
    )
}
