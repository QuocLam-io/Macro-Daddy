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

const BrandedCard = ({ food }) => {
  const dispatch = useDispatch();

  const callBrandedNutrients = () => {
    axios
      .get(
        `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${food.nix_item_id}`,
        {
          headers: {
            "x-app-id": "40b82218",
            "x-app-key": "0b053788ee5d2365587a6aa568240953",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        let nutrients = res.data.foods[0];
        dispatch(increaseCalories(nutrients.nf_calories));
        dispatch(increaseFat(nutrients.nf_total_fat));
        dispatch(increaseProtein(nutrients.nf_protein));
        dispatch(increaseCarbs(nutrients.nf_total_carbohydrate));
        dispatch(
          addMeal({
            name: food.food_name,
            type: "branded",
            calories: nutrients.nf_calories,
            fat: nutrients.nf_total_fat,
            protein: nutrients.nf_protein,
            carbs: nutrients.nf_total_carbohydrate,
            photo: nutrients.photo.thumb,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="branded-card-parent">
      <img src={food.photo.thumb} alt="" />
      <p>{food["food_name"]}</p>
      <button onClick={callBrandedNutrients}>Submit</button>
    </div>
  );
};

export default BrandedCard;
