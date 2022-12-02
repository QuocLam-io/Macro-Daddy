import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import MealCard from "./MealCard";

const UserPage = ({ setUserPageMounted }) => {
  const { meals, protein, carbs, fat, calories } = useSelector(
    (store) => store.mealHistory
  );
  const { bmr, name } = useSelector((store) => store.userBio);
  

  let theDate = moment().format("MMM Do, YYYY");

  useEffect(() => {
    setUserPageMounted(true);
    return () => {
      setUserPageMounted(false);
    };
  }, [setUserPageMounted]);

  const mealCard = meals.map((meal) => {
    return <MealCard meal={meal} />;
  });

  return (
    <div className="userpage-parent">
      <div className="userpage-left">
        <div className="user-daily-macro">
          <div className="user-daily-macro-header">
            <p>{moment().format("ddd, MMM Do")}</p>
            <p>My Daily Macros</p>
          </div>
          <div className="user-daily-macro-body">
            <span>{calories}</span>
            <div>Calories</div>
            <span>/</span>
            <span>{bmr}</span>
            <div>TDEE</div>
          </div>
          <div className="user-daily-macro-difference">
            <div>{calories - bmr}</div>
            <span>
              &nbsp; Caloric&nbsp;
              {bmr > calories ? "Deficit" : "Gainz!"}
            </span>
          </div>
          <div className="user-daily-macro-footer">
            <div className="">
              <p>Protein</p>
              <p>{protein}</p>
            </div>
            <div className="">
              <p>Carbs</p>
              <p>{carbs}</p>
            </div>
            <div className="">
              <p>Fats</p>
              <p>{fat}</p>
            </div>
          </div>
        </div>
        <div className="user-name">
          <img className="plate" src="/imgs/merp.svg" alt="blub" />
          <div>
            <p>{name}</p>
            <p>A Daddy since {theDate}</p>
          </div>
        </div>
      </div>
      <div className="userpage-right">
        <p>Your Meals Today</p>
        <div className="user-meals">{mealCard}</div>
      </div>
    </div>
  );
};

export default UserPage;
