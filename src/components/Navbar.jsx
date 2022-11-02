import React from "react";
import styles from "./Navbar.module.scss";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <span className={styles.nav__logo}>Tastify</span>
      <input
        type="text"
        className={styles.nav__search}
        placeholder="Search Recipe Here!"
      />
      <div className={styles.nav__bookmark}>
        <span>Bookmarks</span>
        <span className={styles.nav__bookmark_icon}>
          {/* <FaBookmark /> */}
          <FaRegBookmark />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
