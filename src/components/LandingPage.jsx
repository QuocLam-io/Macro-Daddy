import React, { useState } from "react";
const LandingPage = () => {

  const [form, setForm] = useState(false);

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
        <form className="landing-form">
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
          <select name="gender" id="gender">
            <option disabled selected className="grey-text">Assigned Sex At Birth</option>
            <option className="test" value="male">
              Male
            </option>
            <option value="female">Female</option>
          </select>
          <input type="number" placeholder="Height (Inches)" />
          <input type="number" placeholder="Weight (Pounds)" />
          <select name="physical" id="physical">
          <option disabled selected>Activity Level </option>
            <option value="1.2">Sedentary 🦥</option>
            <option value="1.375">Light Activity: Exercise 1-3/week 🐷</option>
            <option value="1.55">
              Moderately Active: Exercise 3-5/week 🐸
            </option>
            <option value="1.725">Very Active: Exercise 6-7/week 🦈</option>
            <option value="1.9">Lean Meat: Exercise 7+/week 🦁</option>
          </select>
          <button className="submit-btn" type="submit">LET'S GOOOO</button>
        </form>
      )}
    </div>
  );
};

export default LandingPage;
