import React from "react";
import axios from "axios";

const CommonCard = ({ food }) => {
  const callCommonNutrients = () => {
    axios
      .post(
        "https://trackapi.nutritionix.com/v2/natural/nutrients",
        {
          query: food.food_name,
        },
        {
          headers: {
            "x-app-id": "40b82218",
            "x-app-key": "0b053788ee5d2365587a6aa568240953",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="common-card-parent">
      <img src={food.photo.thumb} alt="" />
      <p>{food["food_name"]}</p>
      <button onClick={callCommonNutrients}>Submit</button>
    </div>
  );
};

export default CommonCard;
