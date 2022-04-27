import React from "react";

import footerLogo from "../../assets/svg/logo_white.svg";

import { FooterMenu } from "./FooterMenu";
import { Contacts } from "./Contacts";
import { LinksList } from "./LinksList";
import { FollowUs } from "./FollowUs";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerHeading}>
          <div>
            <img src={footerLogo} />
          </div>

          <h3 className={styles.footerTitle}>
            <span>THE BEST</span> REAL ESTATE IN SPAIN
          </h3>
        </div>

        <hr />

        <FooterMenu />

        <div className={styles.footerMain}>
          <Contacts />

          <LinksList />

          <FollowUs />
        </div>

        <div className={styles.copyrights}>
          <p>
            The company "WTG Spain" specializes in the investment and sale of
            real estate in Spain, and the provision of legal and consulting
            services.
          </p>
          <p>
            All rights reserved. "WTG Spain" - The Best Real Estate in Spain. ©
            Copyright 2007 - 2020.
          </p>
        </div>
      </div>
    </footer>
  );
};