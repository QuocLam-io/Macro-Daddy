import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  common: [],
  branded: [],
};

const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState: initialState,
  reducers: {
    setCommon: (state, action) => {
      state.common = action.payload;
    },
    setBranded: (state, action) => {
      state.branded = action.payload;
    },
  },
});

export const { setCommon, setBranded } = searchResultsSlice.actions;
export default searchResultsSlice.reducer;
