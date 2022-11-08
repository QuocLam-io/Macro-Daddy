import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useSelector } from "react-redux";


const MealCard = ({ meal }) => {
  return (
    <div className="mealCard-parent">
      <div
        className="mealCard-img"
        style={{ backgroundImage: `url(${meal.photo})` }}
      ></div>
      {/* <img src={meal.photo} alt="" /> */}

      <div className="mealCard-info">
        <div className="meal-name">{meal.name} 
        <div
          // onClick={} Dispatch() delete meal
          style={
            {fontSize: "1.5rem", color: "grey", fontWeight: "normal",
            cursor: "pointer"
          }
            
        }
        >X</div>
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
