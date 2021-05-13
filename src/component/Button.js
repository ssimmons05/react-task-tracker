import React from "react";

const Button = ({ color, text, parentFunction }) => {
  // function clicked() {
  //   alert("This has been clicked");
  // }

  return (
    <button
      onClick={parentFunction}
      style={{ backgroundColor: color, color: "white" }}
      className="btn"
    >
      {text}
    </button>
  );
};

export default Button;
