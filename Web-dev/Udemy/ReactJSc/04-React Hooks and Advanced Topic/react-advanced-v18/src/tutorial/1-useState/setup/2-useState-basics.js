import React, { useState } from "react";

const UseStateBasics = () => {
  /*
  console.log(useState);
  console.log(useState());
  console.log(useState("hello world"));

  const value = useState(1)[0];
  const handler = useState(1)[1];
  console.log(value, "\n", handler);
  */

  const [text, setText] = useState("random title");
  const handleClick = () => {
    if (text === "random title") setText("Welcome");
    else setText("random title");
  };
  return (
    <>
      <h2>{text}</h2>
      <button type="button" onClick={handleClick} className="btn">
        random
      </button>
    </>
  );
};

export default UseStateBasics;
