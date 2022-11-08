import React from "react";

const MealCard = ({ meal }) => {
  return (
    <div className="mealCard-parent">
      <img src={meal.photo} alt="" />

      <div className="mealCard-info">
        <div className="meal-name">{meal.name}</div>
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
