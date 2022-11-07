import React from "react";

const MealCard = ({meal}) => {
  return <div className="mealCard-parent">
    <div className="mealCard-left">
      <img src={meal.photo} alt="" />
    </div>
    <div className="mealCard-right">
      <p>{meal.name}</p>
      <p>{meal.calories}</p>
      <p>{meal.fat}</p>
      <p>{meal.protein}</p>
      <p>{meal.carbs}</p>
    </div>
  </div>;
};

export default MealCard;
