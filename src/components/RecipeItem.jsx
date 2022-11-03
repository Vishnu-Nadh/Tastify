import React from "react";
import styles from "./RecipeItem.module.scss";

const RecipeItem = ({ recipe: { id, title, imageUrl, publisher } }) => {
  return (
    <li className={styles.recipe}>
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
