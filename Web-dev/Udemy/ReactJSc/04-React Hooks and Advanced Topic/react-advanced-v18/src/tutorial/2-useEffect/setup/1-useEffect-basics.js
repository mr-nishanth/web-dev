import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  //  if the dependencies is [] , them the render done at first/initial render
  const [value, setValue] = useState(1);
  useEffect(() => {
    console.log("useEffect");
    document.title = `No ${value}`;
  }, [value]);
  console.log("Render Component");
  return (
    <>
      <h2>useEffect Basics</h2>
      <h1>{value}</h1>
      <button className="btn" type="button" onClick={() => setValue(value + 1)}>
        increase
      </button>
    </>
  );
};

export default UseEffectBasics;
