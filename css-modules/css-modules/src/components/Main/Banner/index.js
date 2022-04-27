import React from 'react'
import corner from "../../../assets/svg/corner_vector.svg"
import worker from "../../../assets/svg/contact.svg"

import styles from "./Banner.module.css";

export const Banner = () => {
    return (
        <section className={styles.banner}>
            <div>
                <img src={corner} />

            </div>
            <div className={styles.header}>
                <div className={styles.companyName}>
                    <div className={styles.lineDecorate}></div>

                    <h3>WTG SPAIN</h3>
                </div>
                <h1 className={styles.title}>
                    Do you need 
                    <span> some help</span>?
                </h1>

                <p>Contact us right now and our team will do everything to help you.</p>

                <button className={styles.contactUsBtn}>Contact us</button>
            </div>

            <div className={styles.workerImg}>
                <img src={worker} />
            </div>

        </section>
    )
}
