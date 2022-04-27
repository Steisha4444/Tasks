import React from "react";


import styles from "./FooterMenu.module.css";

export const FooterMenu = () => {
  return (
    <div className={styles.menuContainer}>
      <nav className={styles.footerMenu}>
        <a href="#">All cities</a>
        <a href="#">Blog</a>
        <a href="#">Video</a>
        <a href="#">Contacts</a>
      </nav>
    </div>
  );
};