import React from "react";

import styles from "./ArrowNav.module.css";

import arrow from "../../assets/svg/arrow.svg";

export const ArrowNav = () => {
  return (
    <div className={styles.arrow}>
      <a href="#">
        <img src={arrow}  />
      </a>
    </div>
  );
};