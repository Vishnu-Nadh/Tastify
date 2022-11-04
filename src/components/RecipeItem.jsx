import React from "react";
import styles from "./RecipeItem.module.scss";
import { useContext } from "react";
import RecipeContext from "../store/recipe-context";

const RecipeItem = ({ recipe: { id, title, imageUrl, publisher } }) => {
  const { fetchRecipe } = useContext(RecipeContext);
  return (
    <li className={styles.recipe} onClick={() => fetchRecipe(id)}>
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
