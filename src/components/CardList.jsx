import React from "react";
import { useSelector } from "react-redux";
import CommonCard from "./CommonCard";
import BrandedCard from "./BrandedCard";

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
        <div className="bmr-difference">
          {calories - bmr} {bmr > calories ? "Calorie Deficit" : "Weight gain"}
        </div>
        <div className="macro-counts">
          <div className="display-protein">{protein} </div>
          <div className="display-carbs"> {carbs} </div>
          <div className="display-fats">{fat} </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
