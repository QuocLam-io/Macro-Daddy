import React from "react";
import { useSelector } from "react-redux";

const CardList = () => {

  const { bmr } = useSelector((store) => store.userBio);

  return (
    <div className="cardlist-parent">
      <div className="search-results-display">
      </div>
      <div className="macro-display">
        <p>MY DAILY MACROS</p>
        <div className="">{bmr}</div>
      </div>
    </div>
  );
};

export default CardList;
