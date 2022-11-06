import React from "react";
import { useHttp } from "../hooks/use-http";
import { useState } from "react";

const baseUrl = "https://forkify-api.herokuapp.com/api/v2/recipes";

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
  onIncreseServings: () => {},
  onDecreaseServings: () => {},
};

const RecipeContext = React.createContext(initialRecipeState);

export const RecipeContextProvider = ({ children }) => {
  const {
    fetchData: fetchRecipe,
    data: currentRecipe,
    isLoading: isCurrentRecipeLoading,
    hasFetched: hasFetchedRecipe,
    hasError: hasRecipeFetchError,
    setData: setCurrentRecipe,
  } = useHttp(
    (id) => `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`,
    { method: "GET" },
    {},
    (resp) => {
      const data = resp.data.recipe;
      const recipe = {
        id: data.id,
        title: data.title,
        cookingTime: data.cooking_time,
        imageUrl: data.image_url,
        ingredients: data.ingredients,
        publisher: data.publisher,
        servings: data.servings,
        sourceUrl: data.source_url,
      };
      localStorage.setItem("currentRecipe", JSON.stringify(recipe));
      return recipe;
    }
  );

  const {
    fetchData: fetchRecipes,
    data: recipes,
    isLoading: isRecipesLoading,
    hasFetched: hasFetchedRecipes,
    hasError: hasRecipesFetchError,
  } = useHttp(
    (query) =>
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`,
    { method: "GET" },
    [],
    (resp) => {
      const recipes = resp.data.recipes.map((recipe) => {
        return {
          id: recipe.id,
          imageUrl: recipe.image_url,
          publisher: recipe.publisher,
          title: recipe.title,
        };
      });
      return recipes;
    }
  );

  const onIncreseServings = () => {
    let savedRecipe = JSON.parse(localStorage.getItem("currentRecipe"));
    console.log(savedRecipe);
    let ratio = (currentRecipe.servings + 1) / savedRecipe.servings;
    let updatedRecipe = {
      ...currentRecipe,
      servings: currentRecipe.servings + 1,
      ingredients: savedRecipe.ingredients.map((ing) => ({
        ...ing,
        quantity: ing.quantity !== null ? ing.quantity * ratio : null,
      })),
    };
    setCurrentRecipe(updatedRecipe);
  };

  const onDecreaseServings = () => {
    if (currentRecipe.servings === 1) return;
    let savedRecipe = JSON.parse(localStorage.getItem("currentRecipe"));
    let ratio = (currentRecipe.servings - 1) / savedRecipe.servings;
    let updatedRecipe = {
      ...currentRecipe,
      servings: currentRecipe.servings - 1,
      ingredients: savedRecipe.ingredients.map((ing) => ({
        ...ing,
        quantity: ing.quantity !== null ? ing.quantity * ratio : null,
      })),
    };
    setCurrentRecipe(updatedRecipe);
  };

  const RecipeState = {
    fetchRecipes,
    recipes,
    isRecipesLoading,
    hasRecipesFetchError,
    hasFetchedRecipes,
    fetchRecipe,
    currentRecipe,
    hasRecipeFetchError,
    isCurrentRecipeLoading,
    hasFetchedRecipe,
    onIncreseServings,
    onDecreaseServings,
  };
  return (
    <RecipeContext.Provider value={RecipeState}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeContext;
