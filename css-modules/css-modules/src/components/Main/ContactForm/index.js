import React from "react";

import { Form } from "./Form";

import map from "../../../assets/img/map.png";
import styles from "./ContactForm.module.css";


export const ContactForm = () => {
  return (
    <section className={styles.contactMap}>
      <p className={styles.formQuote}>
        We are always in touch and will be happy to resolve any of your
        questions.
      </p>

      <div className={styles.formContainer}>
        <div className={styles.mapImg}>
          <img src={map} />
        </div>

        <div className={styles.formBlock}>
          <h2>Contact us</h2>

          <Form />

          <div className={styles.policy}>
            <a href="#">Privacy policy</a>
          </div>
        </div>
      </div>
    </section>
  );
};