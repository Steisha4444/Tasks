import React from "react";
import logo from "../../../assets/svg/logo_blue.svg";
import styles from "./Menu.module.css";

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img src={logo} />
        </div>

        <div className={styles.linksList}>
          <nav className={styles.navigation}>
            <select>
              <option value="" selected>Cities</option>
            </select>

            <select>
              <option value="">Properties</option>
            </select>

            <a href="#">Blog</a>
            <a href="#">Video</a>
            <a href="#">Contacts</a>
          </nav>

          <div className={styles.registration}>
            <a href="#" className={styles.logIn}>Log in</a>

            <a href="#" className={styles.signUp}>Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};
