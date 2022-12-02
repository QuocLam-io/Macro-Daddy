import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: 0,
  sex: "",
  height: 0,
  weight: 0,
  activityLevel: 0,
  bmr: 0,
  signedIn: false,
};

const userBioSlice = createSlice({
  name: "userBio",
  initialState: initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setSex: (state, action) => {
      state.sex = action.payload;
    },
    setHeight: (state, action) => {
      state.height = action.payload;
    },
    setWeight: (state, action) => {
      state.weight = action.payload;
    },
    setActivityLevel: (state, action) => {
      state.activityLevel = action.payload;
    },
    setSignedIn: (state) => {
      state.signedIn = !state.signedIn;
    },
    calculateBMR: (state) => {
      if (state.sex === "female") {
        state.bmr = Math.round(
          (9.99 * (state.weight * 0.45) +
            6.25 * (state.height * 2.54) -
            4.92 * state.age -
            161) 
          * state.activityLevel
        );
      } else {
        state.bmr = Math.round(
          (9.99 * (state.weight * 0.45) +
            6.25 * (state.height * 2.54) -
            4.92 * state.age +
            5) *
            state.activityLevel
        );
      }
    },
  },
});

export const {
  setName,
  setAge,
  setSex,
  setHeight,
  setWeight,
  setActivityLevel,
  calculateBMR,
  setSignedIn,
} = userBioSlice.actions;
export default userBioSlice.reducer;
