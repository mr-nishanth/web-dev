import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  console.log(size);
  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);

    // cleanup function
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  console.log("initial render");
  return (
    <>
      <h2>useEffect cleanup</h2>
      <h1>Width : {size} PX</h1>
    </>
  );
};

export default UseEffectCleanup;
