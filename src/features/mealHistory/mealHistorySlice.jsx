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
        let num = acc + meal.carbs;
        return Math.round(num * 100) / 100
      }, 0);
    },
    increaseCarbs: (state, action) => {
      state.carbs = state.meals.reduce((acc, meal) => {
        let num = acc + meal.carbs;
        return Math.round(num * 100) / 100
      }, 0);
    },
    increaseFat: (state, action) => {
      state.fat = state.meals.reduce((acc, meal) => {
        let num = acc + meal.carbs;
        return Math.round(num * 100) / 100
      }, 0);
    },
    increaseCalories: (state, action) => {
      state.calories = state.meals.reduce((acc, meal) => {
        let num = acc + meal.carbs;
        return Math.round(num * 100) / 100
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
