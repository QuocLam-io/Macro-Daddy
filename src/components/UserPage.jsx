import React, { useEffect } from "react";
import moment from "moment";

const UserPage = ({ setUserPageMounted }) => {
  useEffect(() => {
    setUserPageMounted(true);
    return () => {
      setUserPageMounted(false);
    };
  }, [setUserPageMounted]);

  return (
    <div className="userpage-parent">
      <div className="userpage-left">
        <div className="user-daily-macro"></div>
        <div className="user-name">
          <img className="plate" src="/imgs/merp.svg" alt="blub" />
          <div>
            <p>Eddie Merpy</p>
            <p>A Daddy since</p>
          </div>
        </div>
      </div>
      <div className="userpage-right">
        <p>Your Meals Today</p>
        <div className="user-meals"></div>
      </div>
    </div>
  );
};

export default UserPage;
