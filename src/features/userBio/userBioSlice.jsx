import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: 0,
  sex: "",
  height: 0,
  weight: 0,
  activityLevel: 0,
  bmr: 0,
  signedIn: true,
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
        state.bmr =
          Math.round(
            (655 +
              4.35 * state.weight +
              4.7 * state.height -
              4.7 * state.age) *
              state.activityLevel
          )
        ;
      } else {
       state.bmr = 
          Math.round(
            (66 +
              6.23 * state.weight +
              12.7 * state.height -
              6.8 * state.age) *
              state.activityLevel
          )
        ;
      }
    },
  },
});

export const { setName, setAge, setSex, setHeight, setWeight, setActivityLevel, calculateBMR, setSignedIn } = userBioSlice.actions;
export default userBioSlice.reducer;