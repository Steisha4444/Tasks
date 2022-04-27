import React from "react";

import phoneBlue from "../../../assets/svg/phone_blue.svg";
import emailBlue from "../../../assets/svg/mail_blue.svg";
import whatsUpGreen from "../../../assets/svg/whatsUp_green.svg";
import viberPurple from "../../../assets/svg/viber_purple.svg";
import messangerBlue from "../../../assets/svg/facebook_messanger_blue.svg";
import telegramBlue from "../../../assets/svg/telegram.svg";

import styles from "./Contacts.module.css";

export const Contacts = () => {
    return (
        <section>
            <div className={styles.lineBreak}></div>

            <div className={styles.contactsWrapper}>

                <div className={styles.phoneContainer}>
                    <h3 className={styles.contactsTitle}>Phone</h3>
                    <div className={styles.contactsContainer}>
                        <div>
                            <img src={phoneBlue} className={styles.phoneIcon} />
                        </div>

                        <p>+34 965 020784</p>
                    </div>
                </div>

                <div className={styles.officeContainer}>
                    <h3 className={styles.contactsTitle}>Office in Spain</h3>

                    <p>
                        Centro Comercial Playa Flamenca C / Niagara, 63 Local 60/PB, first
                        floor, 03189 - Orihuela Costa (Alicante), Spain
                    </p>
                </div>

                <div className={styles.emailContainer}>
                    <h3 className={styles.contactsTitle}>E-mail</h3>

                    <div className={styles.contactsContainer}>
                        <div className={styles.contactsIcon}>
                            <img src={emailBlue} />
                        </div>

                        <p>sales@wtgspain.com</p>
                    </div>
                </div>
            </div>

            <div className={styles.lineBreak}></div>

            <div className={styles.socialsWrapper}>
                <h3 className={styles.socialsTitle}>We are online</h3>

                <div className={styles.socialsContainers}>
                    <div className={styles.socialsContainer}>
                        <div>
                            <img src={whatsUpGreen} />
                        </div>

                        <p>WhatsApp</p>
                    </div>
                    <div className={styles.socialsContainer}>
                        <div>
                            <img src={viberPurple} />
                        </div>

                        <p>Viber</p>
                    </div>
                    <div className={styles.socialsContainer}>
                        <div>
                            <img src={messangerBlue} />
                        </div>

                        <p>Messenger</p>
                    </div>
                    <div className={styles.socialsContainer}>
                        <div>
                            <img src={telegramBlue} />
                        </div>

                        <p>Telegram</p>
                    </div>
                </div>
            </div>
        </section>
    );
};