import React from "react";

import { useForm } from "../../../Validation/useForm";

import styles from "./Form.module.css";

export const Form = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(submitForm);

  function submitForm() {
    console.log(values);
    alert("Data submitted successfully! ")
  }

  return (
      
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.formInput}
        name="name"
        type="text"
        placeholder="Name"
        onChange={handleChange}
      />
      <span className={styles.errorline}>
        {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
      </span>

      <input
        className={styles.formInput}
        name="phone"
        type="tel"
        placeholder="Phone"
        onChange={handleChange}
      />
      <span className={styles.errorline}>
        {errors.phone && (
          <span className={styles.errorMsg}>{errors.phone}</span>
        )}
      </span>

      <input
        className={styles.formInput}
        name="email"
        type="email"
        placeholder="E-mail"
        onChange={handleChange}
      />
      <span className={styles.errorline}>
        {errors.email && (
          <span className={styles.errorMsg}>{errors.email}</span>
        )}
      </span>

      <textarea
        className={styles.textarea}
        name="messageText"
        placeholder="Message"
        rows={"4"}
        onChange={handleChange}
      ></textarea>
      <span className={styles.errorline}>
        {errors.messageText && (
          <span className={styles.errorMsg}>{errors.messageText}</span>
        )}
      </span>

      <button className={styles.formBtn} type="submit">
        Send
      </button>
    </form>
  );
};