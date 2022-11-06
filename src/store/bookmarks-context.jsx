import React from "react";
import { useState } from "react";

const bookmarks = localStorage.getItem("bookmarks")
  ? JSON.parse(localStorage.getItem("bookmarks"))
  : [];

const initialState = {
  bookmarkedRecipes: bookmarks,
  toggleBookmark: () => {},
};

const BookmarksContext = React.createContext(initialState);

export const BookmarksProvider = ({ children }) => {
  const [bookmarkedRecipes, setBookmarkedRecipes] = useState(bookmarks);

  const toggleBookmark = (recipe) => {
    const BookmarkedRecipe = bookmarkedRecipes.find(
      (item) => item.id === recipe.id
    );
    if (BookmarkedRecipe) {
      // Remove bookmark
      const updatedBookmarks = bookmarkedRecipes.filter(
        (item) => item.id !== recipe.id
      );

      setBookmarkedRecipes(updatedBookmarks);
      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    } else {
      // Add bookmark
      const updatedBookmarks = bookmarkedRecipes.concat(recipe);
      setBookmarkedRecipes(updatedBookmarks);
      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    }
  };

  return (
    <BookmarksContext.Provider value={{ bookmarkedRecipes, toggleBookmark }}>
      {children}
    </BookmarksContext.Provider>
  );
};

export default BookmarksContext;
