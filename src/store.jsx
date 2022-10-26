import { configureStore } from "@reduxjs/toolkit";
import userBioReducer from "./features/userBio/userBioSlice";


export const store = configureStore({
  reducer: {
    userBio: userBioReducer
  },
});