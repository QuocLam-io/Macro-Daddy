import React from "react";
import { useDispatch } from "react-redux";
import { deleteMeal } from "../features/mealHistory/mealHistorySlice";

const MealCard = ({ meal }) => {
  const dispatch = useDispatch();

  return (
    <div className="mealCard-parent">
      <div
        className="mealCard-img"
        style={{ backgroundImage: `url(${meal.photo})` }}
      ></div>
      <div className="mealCard-info">
        <div className="meal-name">
          {meal.name}
          <div
            onClick={()=>{dispatch(deleteMeal(meal.id))}}
            style={{
              fontSize: "1.5rem",
              color: "grey",
              fontWeight: "normal",
              cursor: "pointer",
            }}
          >
            X
          </div>
        </div>
        <div className="mealCard-macros">
          <div>
            <div>Calories</div>
            {meal.calories}
          </div>
          <div>
            <div>Protein</div>
            {meal.fat}
          </div>
          <div>
            <div>Carbs</div> {meal.protein}
          </div>
          <div>
            <div>Fats</div> {meal.carbs}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
