import React from "react";
import "./Rate.css";
import iconStar from "../../assets/icon-star.svg";
import { useState } from "react";

export default function Rate({ setSubmit, rate, setRate }) {
  let buttons = [1, 2, 3, 4, 5];
  console.log(rate);
  return (
    <div className="rate-container">
      <div className="oval">
        <img src={iconStar} alt="Icon Star" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="button-container">
        {buttons.map((button) => (
          <button
            className="rate-button"
            onClick={() => setRate(button)}
            key={button}
            style={
              rate === button
                ? { backgroundColor: "#fc7614", color: "#ffffff" }
                : {}
            }
          >
            {button}
          </button>
        ))}
      </div>
      <button
        className="submit"
        onClick={() => {
          rate && setSubmit(true);
        }}
      >
        Submit
      </button>
    </div>
  );
}
