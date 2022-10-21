import React, { useState } from "react";

const LandingPage = () => {
  const [form, setForm] = useState(false);

  return (
    <div className="landing-parent">
      <div className="landing-left">
        <div className="landing-title">
          <p>WhackDADDY</p>
          <div className="blub"></div>
          <p>TO</p>
          <p>MacDADDY</p>
        </div>
        <p>An evidence-based way to lose weight 💪</p>
        <button
          //TODO className="start-btn"
          onClick={() => {
            setForm(true);
          }}
        >
          CLICK ME <span>→</span>
        </button>
      </div>
      {form && <form className="landing-form"></form>}
    </div>
  );
};

export default LandingPage;
