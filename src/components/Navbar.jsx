import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const Navbar = () => {
  const { signedIn } = useSelector((store) => store.userBio);
  //todo: store search result slice
  //todo: useSelector that state and put into pepperoni pizza

  //? --------------------------- Call Axios Function -------------------------- */
  const callAxios = () => {
    axios
      .post(
        `https://trackapi.nutritionix.com/v2/natural/nutrients/`,
        {
          query: "pepperoni pizza",
        },
        {
          headers: {
            "x-app-id": "40b82218",
            "x-app-key": "0b053788ee5d2365587a6aa568240953",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        //todo: store res in recipes slice
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //? -------------------------------------------------------------------------- */

  //! Search Handler Function
  // const searchResultsHandler = (e) => {
  //   setSearchResults(e.target.value);
  // };

  //! Enter Button Function
  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter") {
  //     submitHandler(event);
  //     console.log("Enter key pressed ✅");
  //   }
  // };

  //! Submit Handler Function
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   callAxios();
  //   setSearchResults("");
  // };



  return (
    <div className="nav-parent">
      <Link to="/">
        <div className="icon">
          <img src="/imgs/icon.svg" alt="blub" />
          <p>Macro DADDY</p>
        </div>
      </Link>

      {signedIn && (
        <div className="nav-search" action="">
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
            onClick={(e) => {
              callAxios();
            }}
            type="submit"
            // onClick={submitHandler}
          >
            <img className="magnify" src="/imgs/magnify.png" alt="" />
          </button>
        </div>
      )}

      {signedIn && (
        <Link className="user-page" to="userpage">
          MY MACROS
        </Link>
      )}
    </div>
  );
};

export default Navbar;
