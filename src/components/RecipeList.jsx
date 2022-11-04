import React from "react";
import styles from "./RecipeList.module.scss";
import RecipeItem from "./RecipeItem";
import SkeletonRecipeItem from "./loaders/SkeletonRecipeItem";

const RecipeList = ({ isLoading, hasError, recipes }) => {
  console.log(isLoading);
  return (
    <section className={styles.list}>
      <ul className={styles.list__items}>
        {isLoading &&
          [...Array(10).keys()].map((item) => (
            <SkeletonRecipeItem key={item} />
          ))}
        {recipes.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </ul>
      <div className="pagination">pagination component</div>
      <div className={styles.list__footer}>
        <p>All rights reserved &#169; Vishnunadh</p>
      </div>
    </section>
  );
};

export default RecipeList;
