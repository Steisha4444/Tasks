import React from "react";
import star from "../../../assets/img/star.png";

import phoneWhite from "../../../assets/svg/smartphone_white.svg";
import mailWhite from "../../../assets/svg/mail_white.svg";
import markWhite from "../../../assets/svg/mark_white.svg";

import styles from "./Contacts.module.css";

export const Contacts = () => {
  return (
    <div className={styles.contactsContainer}>
      <h4 className={styles.contactsTitle}>Contacts:</h4>

      <div className={styles.contactsBlock}>
        <div className={styles.contactsItem}>
          <div>
            <img src={phoneWhite} />
          </div>

          <p>+34 (965) 020 - 784</p>
        </div>

        <div className={styles.contactsItem}>
          <div>
            <img src={mailWhite} />
          </div>

          <p>sales@wtgspain.com</p>
        </div>

        <div className={styles.contactsItem}>
          <div>
            <img src={markWhite} />
          </div>

          <p>
            Centro Comercial «Playa Flamenca» C/ Niagara, 63 Local 60/PB, first
            floor, 03189 - Orihuela Costa (Alicante), Spain
          </p>
        </div>

        <div className={styles.contactsItem}>
          <p>Rating 4.9/5: </p>

          <div className={styles.startRating}>
            <img className={styles.startRating} src={star} />
            <img className={styles.startRating} src={star} />
            <img className={styles.startRating} src={star} />
            <img className={styles.startRating} src={star} />
            <img className={styles.startRating} src={star} />

          </div>

          <p>820 votes</p>
        </div>
      </div>
    </div>
  );
};