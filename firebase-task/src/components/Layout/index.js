import React, { useEffect } from 'react'
import { Form } from '../Form'
import { auth, db, app, logout } from "../../firebase";
import { Songs } from '../Songs'
import { collection, getDocs, query,  where } from "firebase/firestore";
import { useTheme, useThemeUpdate } from "../../context/ThemeContext";
import styles from './layout.module.css'
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch } from 'react-redux'
import { addSongs } from '../../store/actions/actions';


export const Layout = () => {
   
    const darkTheme = useTheme();

    const toggleTheme = useThemeUpdate();

    const [songs, setSongs] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");

    const dispatch = useDispatch();

    const fetchUser = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            getTodos(data);
            setName(data.name);
        } catch (err) {
            alert("An error occured while fetching user data");
        }
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return;
        fetchUser();
       
    }, [user, loading]);

    // songs: [...state.songs, action.payload]
    const getTodos = async (data) => {
        const querySnapshot = await getDocs(collection(db, data.uid));

        let _songs =[];

        querySnapshot.forEach((doc) => {
            
            _songs.push(doc.data());
        });
       
        dispatch(addSongs((_songs)));
    }

    return (
        <div>
            <div className={styles.dashboard}>
                <div className={styles.dashboard__container}>
                    Logged in as
                    <div>{name}</div>
                    <div>{user?.email}</div>
                    <button className={styles.dashboard__btn} onClick={logout}>
                        Logout
                    </button>
                </div>
            </div>


            <div className={`${styles.layout} ${darkTheme ? styles.layoutDark : styles.layoutLight}`}>

                <div className={styles.list__wrapper}>

                    <h1 className={styles.list__title}>Playlist</h1>

                    <button className={styles.toggleTheme} onClick={toggleTheme} variant="contained" color="secondary">
                        Toggle Theme
                    </button>

                    <Form />
                    <Songs  />

                </div>
            </div>
        </div>
    )
}