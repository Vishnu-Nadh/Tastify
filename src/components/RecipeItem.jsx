import React from "react";
import styles from "./RecipeItem.module.scss";
import { useContext } from "react";
import RecipeContext from "../store/recipe-context";

const RecipeItem = ({ recipe, onShow }) => {
  const { id, title, imageUrl, publisher } = recipe;
  const { fetchRecipe, currentRecipe } = useContext(RecipeContext);
  const recipeClasses =
    currentRecipe.id === id
      ? `${styles.recipe} ${styles.active}`
      : `${styles.recipe}`;
  const showRecipeHandler = () => {
    fetchRecipe(id);
    onShow();
  };
  return (
    <li className={recipeClasses} onClick={showRecipeHandler}>
      <div className={styles.recipe__image}>
        <img src={imageUrl} alt="recipe" />
      </div>
      <div className={styles.recipe__info}>
        <h4>{title}</h4>
        <p>{publisher}</p>
      </div>
    </li>
  );
};

export default RecipeItem;
