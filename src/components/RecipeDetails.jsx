import React from "react";
import styles from "./RecipeDetails.module.scss";
import RecipeContext from "../store/recipe-context";
import { useContext } from "react";
import { CgBowl } from "react-icons/cg";
import SkeletonRecipeDetails from "./loaders/SkeletonRecipeDetails";

const RecipeDetails = () => {
  const { currentRecipe, hasFetchedRecipe, isCurrentRecipeLoading } =
    useContext(RecipeContext);
  if (isCurrentRecipeLoading) return <SkeletonRecipeDetails />;
  if (!hasFetchedRecipe) return;
  const ingredients = hasFetchedRecipe ? currentRecipe.ingredients : [];

  return (
    <article className={styles.ing}>
      <h2 className={styles.ing__header}>Recipe Ingredients</h2>
      <div className={styles.ing__grid}>
        {ingredients.map((ing, i) => (
          <p key={i} className={styles.ing__item}>
            <CgBowl className={styles.ing__item__icon} />
            <span className={styles.ing__quantity}>{ing.quantity}</span>
            <span className={styles.ing__unit}>{ing?.unit}</span>
            <span>{ing.description}</span>
          </p>
        ))}
      </div>
      <div className={styles.source}>
        <h2 className={styles.ing__header}>How to cook</h2>
        <p>
          This recipe was carefully designed and tested by{" "}
          <span className={styles.source__publisher}>
            {currentRecipe.publisher}.
          </span>
          Please check out directions at their website.
        </p>
        <a
          href={currentRecipe.sourceUrl}
          className={styles.source__btn}
          target="_blank"
        >
          Directions
        </a>
      </div>
    </article>
  );
};

export default RecipeDetails;
