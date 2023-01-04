import { useEffect, useState } from "react";
import "./app.css";

const useStateEx = () => {
  const [count, setCount] = useState(10);
  const [toggle, setToggle] = useState(false);
  const inc = () => {
    setCount((prev) => prev + 1);
  };
  const dec = () => {
    setCount((prev) => prev - 1);
  };
  const reset = () => {
    setCount(0);
  };

  console.log("Reading");

  useEffect(() => {
    console.log("UseEffect called");
  });

  return (
    <>
      <h1>counter using useState</h1>
      <div>Counter : {count}</div>

      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <br />
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default useStateEx;
