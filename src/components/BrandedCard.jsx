import React from "react";
import axios from "axios";

const BrandedCard = ({ food, key }) => {
  
  const callBrandedNutrients = () => {
    axios
      .get(
        `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${food.nix_item_id}`,
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

  return <div className="branded-card-parent">
    <img src={food.photo.thumb} alt="" />
      <p>{food["food_name"]}</p>
      <button onClick={callBrandedNutrients}>Submit</button>
  </div>;
};

export default BrandedCard;
