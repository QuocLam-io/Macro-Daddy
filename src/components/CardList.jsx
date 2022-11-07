import React from "react";
import { useSelector } from "react-redux";
import CommonCard from "./CommonCard";
import BrandedCard from "./BrandedCard";
import MealCard from "./MealCard";

const CardList = () => {
  const { bmr } = useSelector((store) => store.userBio);
  const { common, branded } = useSelector((store) => store.searchResults);
  const { meals, protein, carbs, fat, calories } = useSelector(
    (store) => store.mealHistory
  );

  const commonCard = common.map((food) => {
    return <CommonCard food={food} key={food.food_name} />;
  });

  const brandedCard = branded.map((food) => {
    return <BrandedCard food={food} key={food.food_name} />;
  });

  const mealCard = meals.map((meal) => {
    return <MealCard meal={meal} />;
  });

  return (
    <div className="cardlist-parent">
      <div className="search-results-display">
        {commonCard}
        {brandedCard}
      </div>

      <div className="macro-display">
        <p>MY DAILY MACROS</p>
        <div className="bmr-divide">
          {calories}
          <span>Calories</span> / {bmr} <span>TDEE</span>
        </div>
        <div className="bmr-difference" style={{ fontSize: "2vw" }}>
          {calories - bmr}
          <span style={{ color: "green" }}>
            &nbsp; Caloric&nbsp;
            {bmr > calories ? "Deficit" : "Gainz"}
          </span>
        </div>
        <div className="macro-counts">
          <div>
            <div>Protein</div>
            {protein}
          </div>
          <div>
            <div>Carbs</div>
            {carbs}{" "}
          </div>
          <div>
            <div>Fats</div>
            {fat}{" "}
          </div>
        </div>
        <div className="meal-history">{mealCard}</div>
      </div>
    </div>
  );
};

export default CardList;
