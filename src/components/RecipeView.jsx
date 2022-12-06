import React from "react";
import styles from "./RecipeView.module.scss";
import { useContext } from "react";
import RecipeContext from "../store/recipe-context";
import Spinner from "./loaders/Spinner";

const RecipeView = () => {
  const { currentRecipe, isCurrentRecipeLoading, hasFetchedRecipe } =
    useContext(RecipeContext);

  return (
    <figure className={styles.view}>
      {isCurrentRecipeLoading && <Spinner />}
      {!isCurrentRecipeLoading && hasFetchedRecipe && (
        <img
          src={currentRecipe.imageUrl}
          alt="meal"
          className={styles.view__image}
        />
      )}
      {!isCurrentRecipeLoading && hasFetchedRecipe && (
        <h1 className={styles.view__title}>
          <span>{currentRecipe.title}</span>
        </h1>
      )}
    </figure>
  );
};

export default RecipeView;
