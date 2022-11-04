import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./sass/main.scss";
import { RecipeContextProvider } from "./store/recipe-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecipeContextProvider>
      <App />
    </RecipeContextProvider>
  </React.StrictMode>
);
