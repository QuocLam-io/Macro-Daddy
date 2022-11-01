import { configureStore } from "@reduxjs/toolkit";
import userBioReducer from "./features/userBio/userBioSlice";
import searchResultsReducer from "./features/searchResults/searchResultsSlice";

export const store = configureStore({
  reducer: {
    userBio: userBioReducer,
    searchResults: searchResultsReducer,
  },
});
