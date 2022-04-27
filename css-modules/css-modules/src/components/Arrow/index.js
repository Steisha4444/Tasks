import React from "react";

import styles from "./Arrow.module.css";

import arrow from "../../assets/svg/arrow.svg";

export const Arrow = () => {
  return (
    <div className={styles.arrow}>
      <a href="#">
        <img src={arrow}  />
      </a>
    </div>
  );
};