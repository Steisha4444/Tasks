import React from "react";

import plane1 from "../../../assets/svg/plane_1.svg";
import plane2 from "../../../assets/svg/plane_2.svg";
import plane3 from "../../../assets/svg/plane_3.svg";
import plane4 from "../../../assets/svg/plane_4.svg";

import styles from "./Circles.module.css";

export const Circles = () => {
  return (
    <div>
      <div className={styles.circle1}>
        <img className={styles.plane1} src={plane1} />
      </div>

      <div className={styles.circle2}>
        <img className={styles.plane2} src={plane2}  />
      </div>

      <div className={styles.circle3}>
        <img className={styles.plane3} src={plane3}  />
      </div>

      <div className={styles.circle4}>
        <img className={styles.plane4} src={plane3}  />
      </div>

      <div className={styles.circle5}>
        <img className={styles.plane5} src={plane4} />
      </div>
    </div>
  );
};

