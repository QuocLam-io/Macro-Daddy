import React, { useState } from "react";

const LandingPage = () => {
  const [form, setForm] = useState(false);

  return (
    <div className="landing-parent">
      <div className="landing-title">
        <p>WhackDADDY</p>
        <p>TO</p>
        <p>MacDADDY</p>
        <p>An evidence-based way to lose weight 💪</p>
        <div
          //TODO className="start-btn"
          onClick={() => {
            setForm(true);
          }}
        >
          CLICK ME <span>→</span>
        </div>
      </div>
      {form && <form className="landing-form"></form>}
    </div>
  );
};

export default LandingPage;
