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
    deleteMeal: (state, action) => {
      state.meals = state.meals.filter((meal) => meal.id !== action.payload);
    },
    increaseProtein: (state) => {
      state.protein = state.meals.reduce((acc, meal) => {
        return acc + meal.protein;
      }, 0);
    },
    increaseCarbs: (state, action) => {
      state.carbs = state.meals.reduce((acc, meal) => {
        return acc + meal.carbs;
      }, 0);
    },
    increaseFat: (state, action) => {
      state.fat = state.meals.reduce((acc, meal) => {
        return acc + meal.fat;
      }, 0);
    },
    increaseCalories: (state, action) => {
      state.calories = state.meals.reduce((acc, meal) => {
        return acc + meal.calories;
      }, 0);
    },
  },
});

export const {
  addMeal,
  deleteMeal,
  increaseCalories,
  increaseFat,
  increaseCarbs,
  increaseProtein,
} = mealHistorySlice.actions;
export default mealHistorySlice.reducer;
