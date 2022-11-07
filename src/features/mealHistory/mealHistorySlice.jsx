import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meals: [],
  protein: 0,
  carbs: 0,
  fat: 0,
  calories: 0,
};

const mealHistorySlice = createSlice({
  name: "mealHistory",
  initialState: initialState,
  reducers: {
    addMeal: (state, action) => {
      state.meals.push(action.payload);
    },
    increaseProtein: (state, action) => {
      state.protein += Math.round(action.payload);
    },
    increaseCarbs: (state, action) => {
      state.carbs += Math.round(action.payload);
    },
    increaseFat: (state, action) => {
      state.fat += Math.round(action.payload);
    },
    increaseCalories: (state, action) => {
      state.calories += Math.round(action.payload);
    },
  },
});

export const {
  addMeal,
  increaseCalories,
  increaseFat,
  increaseCarbs,
  increaseProtein,
} = mealHistorySlice.actions;
export default mealHistorySlice.reducer;
