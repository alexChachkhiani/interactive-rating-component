import React from "react";
import "./Result.css";
import illustartionThankYou from "../../assets/illustration-thank-you.svg";

export default function Result({ rate }) {
  return (
    <div className="result-container">
      <img
        src={illustartionThankYou}
        alt="Illusration Thank You"
        className="illusration-thank-you"
      />
      <div className="result-background">
        <span className="result">You selected {rate} out of 5</span>
      </div>
      <h1>Thank you!</h1>
      <p className="paragraph">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
