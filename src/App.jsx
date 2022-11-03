import { useState, useEffect } from "react";

import "./App.scss";
import {
  Navbar,
  RecipeDetails,
  RecipeActions,
  RecipeList,
  RecipeView,
} from "./components";

function App() {
  const [isRecipesLoading, setIsRecipesLoading] = useState(true);
  const [hasRecipesFetchError, setHasRecipesFetchError] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (query) => {
    setHasRecipesFetchError(false);
    setIsRecipesLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`
      );
      if (!response.ok) throw new Error("Something went wrong !!");
      const resp = await response.json();
      const recipes = resp.data.recipes.map((recipe) => {
        return {
          id: recipe.id,
          imageUrl: recipe.image_url,
          publisher: recipe.publisher,
          title: recipe.title,
        };
      });
      setRecipes(recipes);
      setIsRecipesLoading(false);
    } catch (error) {
      // console.log(error.message);
      setHasRecipesFetchError(true);
      setIsRecipesLoading(false);
    }
  };

  return (
    <main className="app">
      <Navbar onFetchRecipes={fetchRecipes} />
      <RecipeList
        isLoading={isRecipesLoading}
        hasError={hasRecipesFetchError}
        recipes={recipes}
      />
      <RecipeView />
      <RecipeActions />
      <RecipeDetails />
    </main>
  );
}

export default App;
