import React from "react";
import "./Skeletons.scss";

const SkeletonRecipeDetails = () => {
  return (
    <article className="ing">
      <h2 className="header skeleton"></h2>
      <div className="ing__grid">
        {[...Array(12).keys()].map((ing, i) => (
          <p key={i} className="ing__item skeleton textline"></p>
        ))}
      </div>
      <div className="source">
        <h2 className="header skeleton"></h2>
        <p className="textline skeleton"></p>
        <p className="textline skeleton"></p>
        <a href="" className="source__btn button skeleton"></a>
      </div>
    </article>
  );
};

export default SkeletonRecipeDetails;
