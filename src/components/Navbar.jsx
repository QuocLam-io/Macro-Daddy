import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-parent">
      <Link to="/" >
        <div className="icon">
          <img src="/imgs/icon.svg" alt="blub" />
          <p>Macro DADDY</p>
        </div>

        <div className="nav-input" action="">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search Food"
          // value={searchResults}
          // onChange={searchResultsHandler}
          // onKeyDown={handleKeyDown}
        />

        <button className="mag-btn" type="submit" 
        // onClick={submitHandler}
        >
          <img
            className="magnify"
            src={require(`../images/magnify.png`)}
            alt=""
          />
        </button>
      </div>

      <Link to="/userpage">
        <p className="user-btn">MY MACROS</p>
      </Link>
      </Link>
    </div>
  );
};

export default Navbar;
