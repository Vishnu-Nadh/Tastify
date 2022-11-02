import "./App.scss";
import {
  Navbar,
  RecipeDetails,
  RecipeActions,
  RecipeList,
  RecipeView,
} from "./components";

function App() {
  return (
    <main className="app">
      <Navbar />
      <RecipeList />
      <RecipeView />
      <RecipeActions />
      <RecipeDetails />
    </main>
  );
}

export default App;
