import React from "react";

import facebookWhite from "../../../assets/svg/facebook_white.svg";
import youtubeWhite from "../../../assets/svg/youtube_white.svg";
import linkedinWhite from "../../../assets/svg/linkedin_white.svg";
import instagramWhite from "../../../assets/svg/instagram_white.svg";
import questionMark from "../../../assets/svg/question.svg";

import styles from "./FollowUs.module.css";
import { Form } from "./Form/Form";

export const FollowUs = () => {
  return (
    <div className={styles.followUsContainer}>
      <h4 className={styles.followUsTitle}>Follow us:</h4>

      <div className={styles.socialsWrapper}>
        <div className={styles.socialsNetworkInfo}>
          <div>
            <img src={facebookWhite} alt="facebook_icon" />
          </div>

          <p>Facebook</p>
        </div>

        <div className={styles.socialsNetworkInfo}>
          <div>
            <img src={youtubeWhite} alt="youtube_icon" />
          </div>

          <p>Youtube</p>
        </div>

        <div className={styles.socialsNetworkInfo}>
          <div>
            <img src={linkedinWhite} alt="linkedin_icon" />
          </div>

          <p>LinkedIn</p>
        </div>

        <div className={styles.socialsNetworkInfo}>
          <div>
            <img src={instagramWhite} alt="instagram_icon" />
          </div>

          <p>Instagram</p>
        </div>
      </div>

      <div className={styles.subscribeNetworkInfo}>
        <div className={styles.subscribeIntro}>
          <p>Subscribe to new objects</p>

          <div className={styles.subscribersBlock}>
            <img src={questionMark} alt="question_mark" />
            <span className={styles.subscribeTitle}>Subscribe for news  </span>
          </div>
        </div>

        <Form />
      </div>
    </div>
  );
};