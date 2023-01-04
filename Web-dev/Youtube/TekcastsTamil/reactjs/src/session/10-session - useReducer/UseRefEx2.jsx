import { useEffect, useRef, useState } from "react";

// Lets track the component is render first time/second time or re-render
// Lets create a instance variables for tracking the component
const UseRefEx2 = () => {
  const [count, setCount] = useState(10);

  const inc = () => {
    setCount((prev) => prev + 1);
  };
  const dec = () => {
    setCount((prev) => prev - 1);
  };

  // useRef
  const refFirstRender = useRef(true);
  useEffect(() => {
    console.log(`refFirstRender `, refFirstRender);
    !refFirstRender.current
      ? console.log(`re rendering logic goes here`)
      : (refFirstRender.current = false);
  });

  return (
    <>
      <h1>counter using useState</h1>
      <div>Counter : {count}</div>
      <button onClick={inc}>Add</button> <br />
      <button onClick={dec}>Sub</button>
      <br />
    </>
  );
};

export default UseRefEx2;
