import React from "react";
import { TiWarningOutline } from "react-icons/ti";
import styles from "./Error.module.scss";

const Error = () => {
  return (
    <section className={styles.error}>
      <p>Something Went wrong!</p>
      <TiWarningOutline className={styles.error__icon} />
    </section>
  );
};

export default Error;
