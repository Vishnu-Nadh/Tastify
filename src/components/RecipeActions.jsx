import React, { useEffect, useState } from "react";
import styles from "./RecipeActions.module.scss";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { BiGroup } from "react-icons/bi";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { useContext } from "react";
import RecipeContext from "../store/recipe-context";

const RecipeActions = () => {
  const {
    currentRecipe,
    hasFetchedRecipe,
    onIncreseServings,
    onDecreaseServings,
  } = useContext(RecipeContext);

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
      <div className={styles.actions__bookmark}>
        {/* <FaBookmark/> */}
        <FaRegBookmark />
      </div>
    </section>
  );
};

export default RecipeActions;
