import React from "react";
import { CgSmileSad } from "react-icons/cg";
import styles from "./Warning.module.scss"

const Warning = ({ text }) => {
  return (
    <section className={styles.warning}>
      <p>{text}</p>
      <CgSmileSad className={styles.warning__icon} />
    </section>
  );
};

export default Warning;
