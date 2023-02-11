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
            "x-app-id": process.env.REACT_APP_MD_API_ID,
            "x-app-key": process.env.REACT_APP_MD_API_KEY,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        let nutrients = res.data.foods[0];
        dispatch(
          addMeal({
            name: food.food_name,
            type: "branded",
            calories: nutrients.nf_calories,
            fat: nutrients.nf_total_fat,
            protein: nutrients.nf_protein,
            carbs: nutrients.nf_total_carbohydrate,
            photo: nutrients.photo.thumb,
            id: Math.random(),
          })
        );
        dispatch(increaseCalories(nutrients.nf_calories));
        dispatch(increaseFat(nutrients.nf_total_fat));
        dispatch(increaseProtein(nutrients.nf_protein));
        dispatch(increaseCarbs(nutrients.nf_total_carbohydrate));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="branded-card-parent">
      <img src={food.photo.thumb} alt="" />
      <div className="card-right">
        <p className="capitalized">{food.food_name}</p>
        <button onClick={callBrandedNutrients}>ADD</button>
      </div>
    </div>
  );
};

export default BrandedCard;
