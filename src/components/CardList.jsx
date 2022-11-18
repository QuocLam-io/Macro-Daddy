import React from "react";
import { useSelector } from "react-redux";
import CommonCard from "./CommonCard";
import BrandedCard from "./BrandedCard";
import MealCard from "./MealCard";

const CardList = ({
  numOfCommon,
  setNumOfCommon,
  numOfBranded,
  setNumOfBranded,
}) => {
  const { bmr } = useSelector((store) => store.userBio);
  const { common, branded, query } = useSelector(
    (store) => store.searchResults
  );
  const { meals, protein, carbs, fat, calories } = useSelector(
    (store) => store.mealHistory
  );
  const commonSlice = common.slice(0, numOfCommon);
  const brandedSlice = branded.slice(0, numOfBranded);

  const commonCard = commonSlice.map((food) => {
    return <CommonCard food={food} key={food.food_name} />;
  });

  const brandedCard = brandedSlice.map((food) => {
    return <BrandedCard food={food} key={food.food_name} />;
  });

  const mealCard = meals.map((meal) => {
    return <MealCard meal={meal} />;
  });

  return (
    <div className="cardlist-parent">
      {common.length === 0 && branded.length === 0 ? (
        <img className="plate" src="/imgs/plate.svg" alt="blub" />
      ) : (
        <div className="search-results-display">
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            Search results for "{query}"
          </p>
          <p>{common.length + branded.length} results</p>
          <div className="search-cards">
            <p
              style={{
                textDecoration: "underline",
                fontSize: "1.4rem",
              }}
            >
              Common Foods
            </p>
            <div className="common-cards">
              {commonCard}
              <button
                className="card-btn"
                onClick={() => {
                  setNumOfCommon(numOfCommon + 4);
                }}
              >
                {common.length > numOfCommon ? "Load More Results ▾" : ""}
              </button>
            </div>
            <p
              style={{
                textDecoration: "underline",
                fontSize: "1.4rem",
              }}
            >
              Brand Foods
            </p>
            <div className="branded-cards">
              {brandedCard}
              <button
                className="card-btn"
                onClick={() => {
                  setNumOfBranded(numOfBranded + 4);
                }}
              >
                {branded.length > numOfBranded ? "Load More Results ▾" : ""}
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="macro-display">
        <p>MY DAILY MACROS</p>
        <div className="bmr-divide">
          {calories}
          <span>Calories</span> / {bmr} <span>TDEE</span>
        </div>
        <div className="bmr-difference" style={{ fontSize: "2vw" }}>
          {calories - bmr}
          <span style={{ color: "green" }}>
            &nbsp; Caloric&nbsp;
            {bmr > calories ? "Deficit" : "Gainz!"}
          </span>
        </div>
        <section className="macro-counts">
          <div>
            <div>Protein</div>
            {protein}
          </div>
          <div>
            <div>Carbs</div>
            {carbs}
          </div>
          <div>
            <div>Fats</div>
            {fat}
          </div>
        </section>
        <section className="meal-history">{mealCard}</section>
      </section>
    </div>
  );
};

export default CardList;
