import React, { useState } from "react";
import styles from "./RecipeList.module.scss";
import RecipeItem from "./RecipeItem";
import SkeletonRecipeItem from "./loaders/SkeletonRecipeItem";
import Pagination from "./Pagination";
import Intro from "../utils/Intro";
import Warning from "../utils/Warning";
import Error from "../utils/Error";
import { useContext } from "react";
import RecipeContext from "../store/recipe-context";

const RecipeList = () => {
  const {
    isRecipesLoading: isLoading,
    hasRecipesFetchError: hasError,
    recipes,
    hasFetchedRecipes,
  } = useContext(RecipeContext);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const numberOfpages =
    recipes.length === 0 ? 1 : Math.ceil(recipes.length / itemsPerPage);
  const currentItems = recipes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const onClickNext = () => {
    if (currentPage === numberOfpages) return;
    setCurrentPage((prevCurrentPage) => {
      return prevCurrentPage + 1;
    });
  };

  const onClickPrevious = () => {
    if (currentPage === 1) return;
    setCurrentPage((prevCurrentPage) => {
      return prevCurrentPage - 1;
    });
  };

  console.log(hasFetchedRecipes);
  const startingState = !isLoading && !hasFetchedRecipes && !hasError;
  const noRecipeState =
    !isLoading && hasFetchedRecipes && !hasError && recipes.length === 0;
  const errorState = !isLoading && !hasFetchedRecipes && hasError;
  const gotRecipes = !isLoading && hasFetchedRecipes && recipes.length !== 0;

  return (
    <section className={styles.list}>
      <ul className={styles.list__items}>
        {startingState && (
          <Intro text="Start by searching for your favourate meal" />
        )}
        {noRecipeState && <Warning text="No recipes found!" />}
        {errorState && <Error />}

        {isLoading &&
          [...Array(10).keys()].map((item) => (
            <SkeletonRecipeItem key={item} />
          ))}
        {currentItems.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </ul>
      {gotRecipes && (
        <Pagination
          currentPage={currentPage}
          totalPages={numberOfpages}
          onClickNext={onClickNext}
          onClickPrevious={onClickPrevious}
        />
      )}
      <div className={styles.list__footer}>
        <p>All rights reserved &#169; Vishnunadh</p>
      </div>
    </section>
  );
};

export default RecipeList;
