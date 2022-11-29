import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  setBranded,
  setCommon,
  setQuery,
} from "../features/searchResults/searchResultsSlice";
import { useDispatch } from "react-redux";

const Navbar = ({ setNumOfCommon, setNumOfBranded, userPageMounted }) => {
  const { signedIn } = useSelector((store) => store.userBio);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  //TODO: Make dotenv file

  //? --------------------------- Searchbar Function -------------------------- */

  const callRecipeAxios = () => {
    axios
      .get(
        `https://trackapi.nutritionix.com/v2/search/instant?query=${searchQuery}`,
        {
          headers: {
            "x-app-id": "40b82218",
            "x-app-key": "0b053788ee5d2365587a6aa568240953",
          },
        }
      )
      .then((res) => {
        console.table(res.data);
        dispatch(setCommon(res.data.common));
        dispatch(setBranded(res.data.branded));
        setNumOfBranded(4);
        setNumOfCommon(4);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //! Enter Button Function
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      submitHandler(event);
      console.log("Enter key pressed ✅");
    }
  };

  //! Submit Handler Function
  const submitHandler = (e) => {
    e.preventDefault();
    callRecipeAxios();
    dispatch(setQuery(searchQuery));
    setSearchQuery("");
  };
  //? -------------------------------------------------------------------------- */

  return (
    <div className="nav-parent">
      <Link to="/">
        <div className="icon">
          <img src="/imgs/icon.svg" alt="blub" />
          <p >Macro DADDY</p>
        </div>
      </Link>

      {signedIn && (
        <div className="nav-search" action="">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search Food"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          />

          <button
            onClick={(e) => {
              submitHandler(e);
            }}
            type="submit"
          >
            <img className="magnify" src="/imgs/magnify.png" alt="" />
          </button>
        </div>
      )}

      {signedIn && (
        <Link className="user-page-btn" to="userpage">
          {userPageMounted ? undefined : (
            <img className="merp" src="/imgs/merp.svg" alt="" />
          )}
          MY MACROS
        </Link>
      )}
    </div>
  );
};

export default Navbar;
