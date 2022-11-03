import { useReducer, useEffect } from "react";

const initialHttpState = {
  isLoading: false,
  hasError: false,
};

const baseUrl = "https://forkify-api.herokuapp.com/api/v2/recipes";

const httpReducer = (state, action) => {
  if (action.type === "LOAD") {
    return {
      isLoading: true,
      hasError: state.hasError,
    };
  }
  return initialHttpState;
};

export const useHttp = ({ fetchAction, param }) => {
  const [httpState, httpDispatch] = useReducer(httpReducer, initialHttpState);

  useEffect(() => {}, []);

  const onFectchData = async ({ fetchAction, param }) => {
    // SEARCH FOR RECIPE WITH DEBOUNCING
    if (fetchAction === "get-recipes") {
      const url = baseUrl + "?search=" + param;
      const options = { method: "GET" };
    }
    // GET AN SINGLE RECIPE USING ID
    if (fetchAction === "get-recipe") {
      //
    }
    // POST A NEW RECIPE
    if (fetchAction === "add-recipe") {
      //
    }
    // DELETE NEW RECIPE
    if (fetchAction === "delete-recipe") {
      //
    }

    try {
      httpDispatch({ type: "LOAD" });
      const response = await fetch(url, options)
      console.log(response)
    } catch (error) {}
  };
};
