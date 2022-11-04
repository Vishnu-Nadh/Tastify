import React from "react";
import "./Skeletons.scss";

const SkeltonRecipeItem = () => {
  return (
    <li className="recipe">
      <div className="recipe__image skeleton"></div>
      <div className="recipe__info">
        <h4 className="title skeleton"></h4>
        <p className="textline skeleton"></p>
      </div>
    </li>
  );
};

export default SkeltonRecipeItem;
