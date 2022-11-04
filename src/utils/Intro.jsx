import React from "react";
import styles from "./Intro.module.scss";
import { CgSmile } from "react-icons/cg";

const Intro = ({ text }) => {
  return (
    <section className={styles.intro}>
      <p>{text}</p>
      <CgSmile className={styles.intro__icon} />
    </section>
  );
};

export default Intro;
