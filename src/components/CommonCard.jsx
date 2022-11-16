import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  addMeal,
  increaseCalories,
  increaseFat,
  increaseCarbs,
  increaseProtein,
} from "../features/mealHistory/mealHistorySlice";

const CommonCard = ({ food }) => {
  const dispatch = useDispatch();

  const callCommonNutrients = () => {
    axios
      .post(
        "https://trackapi.nutritionix.com/v2/natural/nutrients",
        {
          query: food.food_name,
        },
        {
          headers: {
            "x-app-id": "40b82218",
            "x-app-key": "0b053788ee5d2365587a6aa568240953",
          },
        }
      )
      .then((res) => {
        // console.log(res.data.foods[0]);
        let nutrients = res.data.foods[0];
        dispatch(
          addMeal({
            name: food.food_name,
            type: "common",
            calories: nutrients.nf_calories,
            fat: nutrients.nf_total_fat,
            protein: nutrients.nf_protein,
            carbs: nutrients.nf_total_carbohydrate,
            photo: nutrients.photo.thumb,
            id: Math.random(),
          })
        );
        dispatch(increaseCalories());
        dispatch(increaseFat());
        dispatch(increaseProtein());
        dispatch(increaseCarbs());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="common-card-parent">
      <img src={food.photo.thumb} alt="" />
      <div className="card-right">
        <p className="capitalized">{food.food_name}</p>
        <button onClick={callCommonNutrients}>ADD</button>
      </div>
    </div>
  );
};

export default CommonCard;
