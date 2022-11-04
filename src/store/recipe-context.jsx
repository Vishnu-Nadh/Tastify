import React from "react";
import { useState } from "react";

const initialRecipeState = {
  fetchRecipes: () => {},
  isRecipesLoading: false,
  hasRecipesFetchError: false,
  notFetched: true,
  recipes: [],
  fetchRecipe: () => {},
  currentRecipe: {},
  hasRecipeFetchError: false,
  isCurrentRecipeLoading: false,
  hasFetchedRecipe: false,
};

const RecipeContext = React.createContext(initialRecipeState);

export const RecipeContextProvider = ({ children }) => {
  const [isRecipesLoading, setIsRecipesLoading] = useState(false);
  const [hasRecipesFetchError, setHasRecipesFetchError] = useState(false);
  const [notFetched, setNoFetched] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState({});
  const [hasRecipeFetchError, setHasRecipeFetchError] = useState(false);
  const [isCurrentRecipeLoading, setIsCurrentRecipeLoading] = useState(false);
  const [hasFetchedRecipe, setHasFetchedRecipe] = useState(false);

  const fetchRecipe = async (id) => {
    setHasRecipeFetchError(false);
    setIsCurrentRecipeLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const resp = await response.json();
      const data = resp.data.recipe;
      const recipe = {
        id: data.id,
        title: data.title,
        cookingTime: data.cooking_time,
        imageUrl: data.image_url,
        ingredients: data.ingredients,
        publisher: data.publisher,
        servings: data.servings,
        sourceUrl: data.sourceUrl,
      };
      console.log(recipe);
      setCurrentRecipe(recipe);
      setIsCurrentRecipeLoading(false);
      setHasFetchedRecipe(true);
    } catch (error) {
      setHasRecipeFetchError(true);
      setIsCurrentRecipeLoading(false);
      setHasFetchedRecipe(true);
    }
  };

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
      setNoFetched(false);
    } catch (error) {
      setHasRecipesFetchError(true);
      setIsRecipesLoading(false);
      setNoFetched(false);
    }
  };

  const RecipeState = {
    fetchRecipes,
    isRecipesLoading,
    hasRecipesFetchError,
    notFetched,
    recipes,
    fetchRecipe,
    currentRecipe,
    hasRecipeFetchError,
    isCurrentRecipeLoading,
    hasFetchedRecipe,
  };
  return (
    <RecipeContext.Provider value={RecipeState}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeContext;
