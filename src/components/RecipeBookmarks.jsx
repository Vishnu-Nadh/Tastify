import React from "react";
import styles from "./RecipeBookmarks.module.scss";
import Intro from "../utils/Intro";
import BookmarksContext from "../store/bookmarks-context";
import { useContext } from "react";
import RecipeItem from "./RecipeItem";

const RecipeBookmarks = () => {
  const { bookmarkedRecipes } = useContext(BookmarksContext);
  const noBookmarks = bookmarkedRecipes.length === 0;

  return (
    <section className={styles.list}>
      <ul className={styles.list__items}>
        {noBookmarks && <Intro text="No bookmarks Yet!" />}
        {bookmarkedRecipes.map((recipe, i) => (
          <RecipeItem key={i} recipe={recipe} />
        ))}
      </ul>
    </section>
  );
};

export default RecipeBookmarks;
