import React, { useState } from "react";
import { setName, setAge, setSex, setHeight, setWeight, setActivityLevel, calculateBMR } from "../features/userBio/userBioSlice";
import { useDispatch, useSelector } from "react-redux";

const LandingPage = () => {
  const [form, setForm] = useState(false);
  const { name, age, sex, height, weight, activityLevel } = useSelector(
    (store) => store.userBio
  );
  const dispatch = useDispatch();
  console.log(name);
  console.log(age);
  console.log(sex);
  console.log(weight);
  console.log(height);
  console.log(activityLevel);

  return (
    <div className="landing-parent">
      <div className="landing-left">
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
          <span> →</span>
        </div>
      </div>
      {form && (
        <form
          className="landing-form"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(setName(e.target[0].value));
            dispatch(setAge(parseInt(e.target[1].value)));
            dispatch(setName(e.target[0].value));
            dispatch(setName(e.target[0].value));
            dispatch(setName(e.target[0].value));
            dispatch(setName(e.target[0].value));
          }}
        >
          <p>CREATE YOUR PROFILE</p>
          <p>Enter Your Name</p>
          <input type="text" placeholder="Name" />
          <p>CALCULATE HOW MANY CALORIES YOU USE DAILY</p>
          <p>Harris-Benedict Calculator</p>
          <p>
            We use your <span> Total Daily Expenditure (TDEE)</span> as a
            baseline to help recommend the amount of macros you can plan to
            consume for your weight loss goal.
          </p>
          <input type="number" placeholder="Age (Years)" min="18" />
          <select defaultValue={'DEFAULT'} name="gender" id="gender">
            <option disabled value="DEFAULT" className="grey-text">
              Assigned Sex At Birth
            </option>
            <option className="test" value="male">
              Male
            </option>
            <option value="female">Female</option>
          </select>
          <input type="number" placeholder="Height (Inches)" />
          <input type="number" placeholder="Weight (Pounds)" />
          <select defaultValue={'DEFAULT'} name="physical" id="physical">
            <option value="DEFAULT" disabled >
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
            LET'S GOOOO
          </button>
        </form>
      )}
    </div>
  );
};

export default LandingPage;
