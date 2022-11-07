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
      state.protein += action.payload;
    },
    increaseCarbs: (state, action) => {
      state.carbs += action.payload;
    },
    increaseFat: (state, action) => {
      state.fat += action.payload;
    },
    increaseCalories: (state, action) => {
      Math.round((state.calories += action.payload));
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
