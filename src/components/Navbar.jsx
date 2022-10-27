import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-parent">
      <Link to="/">
        <div className="icon">
          <img src="/imgs/icon.svg" alt="blub" />
          <p>Macro DADDY</p>
        </div>
      </Link>

      <div className="nav-searchbar" action="">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search Food"
          // value={searchResults}
          // onChange={searchResultsHandler}
          // onKeyDown={handleKeyDown}
        />

        <button
          className=""
          type="submit"
          // onClick={submitHandler}
        >
          <img
            className="magnify"
            src="/imgs/magnify.png"
            alt=""
          />
        </button>
      </div>

      <Link to="/userpage">
        <p className="user-btn">MY MACROS</p>
      </Link>
    </div>
  );
};

export default Navbar;
