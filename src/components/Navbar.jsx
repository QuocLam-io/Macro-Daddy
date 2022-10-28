import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { signedIn } = useSelector((store) => store.userBio);

  return (
    <div className="nav-parent">

      <Link to="/">
        <div className="icon">
          <img src="/imgs/icon.svg" alt="blub" />
          <p>Macro DADDY</p>
        </div>
      </Link>

  {signedIn &&    <div className="nav-search" action="">
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
          type="submit"
          // onClick={submitHandler}
        >
          <img className="magnify" src="/imgs/magnify.png" alt="" />
        </button>
      </div>}

      {signedIn &&<Link className="user-page" to="/userPage">
        MY MACROS
      </Link>}

    </div>
  );
};

export default Navbar;
