import React, { useState } from "react";
import {
  setName,
  setAge,
  setSex,
  setHeight,
  setWeight,
  setActivityLevel,
  calculateBMR,
  setSignedIn,
} from "../features/userBio/userBioSlice";
import { useDispatch } from "react-redux";

const LandingPage = () => {
  const [form, setForm] = useState(false);
  const dispatch = useDispatch();


  return (
    <div className="landing-parent">
      <div
        className={`
        landing-left
      ${form && `mobile-hidden`} 
      `}
      >
        <div className="landing-title">
          <p>WHACKDADDY</p>
          <p>TO</p>
          <p>MACDADDY</p>
        </div>
        <p>An evidence-based way to lose weight 💪</p>
        <div
          className="start-btn"
          onClick={() => {
            setForm(true);
          }}
        >
          CLICK ME
          <span className="desktop-arrow"> →</span>
          <span className="mobile-arrow"> ↓</span>
        </div>
      </div>
      {form && (
        <form
          className="landing-form"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(setName(e.target[0].value));
            dispatch(setAge(parseInt(e.target[1].value)));
            dispatch(setSex(e.target[2].value));
            dispatch(
              setHeight(
                parseInt(e.target[3].value) * 12 + parseInt(e.target[4].value)
              )
            );
            dispatch(setWeight(parseInt(e.target[5].value)));
            dispatch(setActivityLevel(parseFloat(e.target[6].value)));
            dispatch(calculateBMR());
            dispatch(setSignedIn());
          }}
        >
          <p>CREATE YOUR PROFILE</p>
          <p>Enter Your Name</p>
          <input required type="text" placeholder="Name" />
          <p>CALCULATE HOW MANY CALORIES YOU USE DAILY</p>
          <p>Mifflin-St Jeor Calculator</p>
          <p>
            We use your <span> Total Daily Expenditure (TDEE)</span> as a
            baseline to help recommend the amount of macros you can plan to
            consume for your weight loss goal.
          </p>
          <input required type="number" placeholder="Age (Years)" min="18" />
          <select required defaultValue={"DEFAULT"} name="gender" id="gender">
            <option disabled value="" className="grey-text">
              Assigned Sex At Birth
            </option>
            <option className="test" value="male">
              Male
            </option>
            <option value="female">Female</option>
          </select>
          <div className="height">
            <div className="empty" style={{ display: "none" }}></div>
            <input required type="number" placeholder="Height (Feet)" />
            <select required defaultValue={"DEFAULT"} name="inches" id="inches">
              <option disabled value="" className="grey-text">
                Inches
              </option>
              <option value="0">0"</option>
              <option value="1">1"</option>
              <option value="2">2"</option>
              <option value="3">3"</option>
              <option value="4">4"</option>
              <option value="5">5"</option>
              <option value="6">6"</option>
              <option value="7">7"</option>
              <option value="8">8"</option>
              <option value="9">9"</option>
              <option value="10">10"</option>
              <option value="11">11"</option>
            </select>
          </div>
          <input required type="number" placeholder="Weight (Pounds)" />
          <select
            required
            defaultValue={"DEFAULT"}
            name="physical"
            id="physical"
          >
            <option value="" disabled>
              Activity Level{" "}
            </option>
            <option value="1.2">Sedentary 🦥</option>
            <option value="1.375">Light Activity: Exercise 1-3/week 🐷</option>
            <option value="1.55">
              Moderately Active: Exercise 3-5/week 🐸
            </option>
            <option value="1.725">Very Active: Exercise 6-7/week 🦈</option>
            <option value="1.9">Lean Meat: Exercise 7+/week 🦁</option>
          </select>
          <button className="submit-btn" type="submit">
            LET'S GOOOO!
          </button>
        </form>
      )}
    </div>
  );
};

export default LandingPage;
