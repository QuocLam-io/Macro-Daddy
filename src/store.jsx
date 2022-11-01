import { configureStore } from "@reduxjs/toolkit";
import userBioReducer from "./features/userBio/userBioSlice";
import searchResultsReducer from "./features/searchResults/searchResultsSlice";
console.log(searchResultsReducer)
console.log(userBioReducer)


export const store = configureStore({
  reducer: {
    userBio: userBioReducer,
    searchResults: searchResultsReducer,
  },
});