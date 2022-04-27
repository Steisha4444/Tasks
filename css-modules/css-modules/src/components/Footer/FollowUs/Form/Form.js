import React from "react";

import { useForm } from "../../../Validation/useForm";

import styles from "./Form.module.css";

export const Form = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(submit);

  function submit() {
    console.log(values);
    alert("Thanks for subscribing to the newsletter! ")
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formWrapper}>
        <input
          className={styles.subscribeInput}
          name="email"
          type="email"
          placeholder="Your email"
          onChange={handleChange}
        />

        <button className={styles.subscribeBtn}>Subscribe</button>
      </div>

      <span className={styles.errorPlaceholder}>
        {errors.email && (
          <span className={styles.errorMsg}>{errors.email}</span>
        )}
      </span>
    </form>
  );
};