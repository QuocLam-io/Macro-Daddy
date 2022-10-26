import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  age: 0,
  sex: "",
  height: 0,
  weight: 0,
  activityLevel: 0,
};

const userBioSlice = createSlice({
  name: "userBio",
  initialState: initialState,
  reducers: {
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
    calculateBMR: (state) => {
//Todo add calculation logic 
    },
  },
});

export const { setAge, setSex, setHeight, setWeight, setActivityLevel, calculateBMR } = userBioSlice.actions;
export default userBioSlice.reducer;