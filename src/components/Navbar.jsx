import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useContext } from "react";
import RecipeContext from "../store/recipe-context";

const Navbar = ({ onFetchRecipes }) => {
  const [enteredSearch, setEnteredSearch] = useState("");
  const { fetchRecipes } = useContext(RecipeContext);

  const debounce = (callback, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };

  const setSearchQuery = debounce((value) => {
    setEnteredSearch(value);
  }, 1000);

  const onSearchQueryHandler = (event) => {
    setSearchQuery(event.target.value.trim());
  };

  useEffect(() => {
    if (enteredSearch === "") return;
    fetchRecipes(enteredSearch);
  }, [enteredSearch]);

  return (
    <nav className={styles.nav}>
      <span className={styles.nav__logo}>Tastify</span>
      <input
        type="text"
        className={styles.nav__search}
        placeholder="Search Recipe Here!"
        onChange={onSearchQueryHandler}
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
