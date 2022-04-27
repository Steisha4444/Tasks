import React from "react";

import styles from "./LinksList.module.css";

export const LinksList = () => {
  return (
    <div className={styles.typesContainer}>
      <h4 className={styles.typesTitle}>Type:</h4>

      <div className={styles.housingLinks}>
        <a href="#">Apartments</a>
        <a href="#">Penthouses</a>
        <a href="#">hrefwnhouses</a>
        <a href="#">Commercial</a>
        <a href="#">Bungalows</a>
        <a href="#">Duplexes</a>
        <a href="#">Villas</a>
      </div>
    </div>
  );
};