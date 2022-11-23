import React, { useEffect } from "react";

const UserPage = ({ setUserPageMounted }) => {
  useEffect(() => {
    setUserPageMounted(true);
    return () => {
      setUserPageMounted(false);
    };
  }, [setUserPageMounted]);

  return <div className="userpage-parent" >
    <div className="userpage-left">
      <div className="user-daily-macro">blub</div>
    </div>
    <div className="userpage-right">
      
    </div>


  </div>;
};

export default UserPage;
