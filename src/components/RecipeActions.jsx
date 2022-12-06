import React, { useEffect, useState } from "react";
import styles from "./RecipeActions.module.scss";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { BiGroup } from "react-icons/bi";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { useContext } from "react";
import RecipeContext from "../store/recipe-context";
import BookmarksContext from "../store/bookmarks-context";
import SkeletonRecipeActions from "./loaders/SkeletonRecipeActions";

const RecipeActions = () => {
  const {
    currentRecipe,
    hasFetchedRecipe,
    onIncreseServings,
    onDecreaseServings,
    isCurrentRecipeLoading,
  } = useContext(RecipeContext);

  // const hasBookmarked =
  const { bookmarkedRecipes, toggleBookmark } = useContext(BookmarksContext);
  const hasBookmarked = bookmarkedRecipes.find(
    (item) => item.id === currentRecipe.id
  );
  if (isCurrentRecipeLoading) return <SkeletonRecipeActions />;
  if (!hasFetchedRecipe) return;

  return (
    <section className={styles.actions}>
      <div className={styles.actions__time}>
        <FiClock className={styles.actions__time_icon} />
        <p>
          <span>{currentRecipe.cookingTime}</span> min
        </p>
      </div>
      <div className={styles.actions__servings}>
        <BiGroup className={styles.actions__servings_icon} />
        <p>
          <span>{currentRecipe.servings}</span> Servings
        </p>
      </div>
      <div className={styles.actions__action_btns}>
        <button onClick={onDecreaseServings}>
          <FiMinusCircle className={styles.actions__btn_icon} />
        </button>
        <button onClick={onIncreseServings}>
          <FiPlusCircle className={styles.actions__btn_icon} />
        </button>
      </div>
      <button
        type="button"
        className={styles.actions__bookmark}
        onClick={() => {
          toggleBookmark(currentRecipe);
        }}
      >
        {hasBookmarked && <FaBookmark />}
        {!hasBookmarked && <FaRegBookmark />}
      </button>
    </section>
  );
};

export default RecipeActions;
