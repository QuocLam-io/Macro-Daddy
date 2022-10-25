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
            setForm(!form);
          }}
        >
          CLICK ME
        <span>→</span>
        </div>
      </div>
      {form && (
        <form className="landing-form">
          <input type="text" />
        </form>
      )}
    </div>
  );
};

export default LandingPage;
