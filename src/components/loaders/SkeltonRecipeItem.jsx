import React from "react";
import "./Skeltons.scss";

const SkeltonRecipeItem = () => {
  return (
    <li className="recipe skelton">
      <div className="recipe__image skelton"></div>
      <div className="recipe__info skelton">
        <h4 className="title skelton"></h4>
        <p className="textline skelton"></p>
      </div>
    </li>
  );
};

export default SkeltonRecipeItem;
