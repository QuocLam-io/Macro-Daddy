import React from "react";
import { useSelector } from "react-redux";

const CardList = () => {
  const { bmr } = useSelector((store) => store.userBio);
  const { common, branded } = useSelector((store) => store.searchResults);

  return (
    <div className="cardlist-parent">
      <div className="search-results-display"></div>
      <div className="macro-display">
        <p>MY DAILY MACROS</p>
        <div className="bmr-divide">
          0<span>TDEE</span> / {bmr} <span>Calories</span>
        </div>
        <div className="bmr-difference">Difference</div>
        <div className="macro-counts">
          <div className="display-protein"></div>
          <div className="display-carbs"></div>
          <div className="display-fats"></div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
