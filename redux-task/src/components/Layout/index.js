import React from 'react'
import { useSelector } from "react-redux"
import { Form } from '../Form'
import { Songs } from '../Songs'
import { useTheme, useThemeUpdate } from "../../context/ThemeContext";
import styles from './layout.module.css'

export const Layout = () => {
    const songs = useSelector(state => state.songsList.songs);
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();

    return (
        <div className={`${styles.layout} ${darkTheme ? styles.layoutDark : styles.layoutLight}`}>

            <div className={styles.list__wrapper}>

                <h1 className={styles.list__title}>Playlist</h1>

                <button className={styles.toggleTheme} onClick={toggleTheme} variant="contained" color="secondary">
                    Toggle Theme
                </button>

                <Form />
                <Songs songs={songs} />

            </div>
        </div>
    )
}
