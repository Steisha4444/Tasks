import React from "react";

import heart from "../../../assets/svg/heart.svg";
import email from "../../../assets/svg/mail_white.svg";
import phone from "../../../assets/svg/phone_white.svg";
import whatsUp from "../../../assets/svg/whatsUp_white.svg";
import UKFlag from "../../../assets/svg/united_kingdom.svg";

import styles from './HeaderTop.module.css'

export const HeaderTop = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.wrapper}>
                <div className={styles.contactsList}>
                    <div className={styles.contactsItem}>

                        <div className={styles.contactsIcon}>
                            <img src={email} />
                        </div>

                        <div className={styles.contactsData}>sales@wtgspain.com</div>
                    </div>

                    <div className={styles.contactsItem}>
                        <div className={styles.contactsIcon}>
                            <img src={phone} />
                        </div>

                        <div className={styles.contactsData}>+34 965 020784</div>
                    </div>
                    <div className={styles.contactsItem}>
                        <div className={styles.whatsUpIcon}>
                            <img src={whatsUp} />
                        </div>

                        <div className={styles.contactsData}>WhatsApp</div>
                    </div>
                </div>
                <div className={styles.menuDetails}>
                    <div className={styles.language}>
                        <div className={styles.heart}>
                            <img src={heart} />
                        </div>

                        <div className={styles.flag}>
                            <img src={UKFlag} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};