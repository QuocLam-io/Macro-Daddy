import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  common: [],
  branded: [],
};

const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState: initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setCommon: (state, action) => {
      state.common = action.payload;
    },
    setBranded: (state, action) => {
      state.branded = action.payload;
    },
  },
});

export const { setCommon, setBranded, setQuery } =
  searchResultsSlice.actions;
export default searchResultsSlice.reducer;
