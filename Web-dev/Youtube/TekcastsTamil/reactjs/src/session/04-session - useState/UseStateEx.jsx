import { useState } from "react";
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
  const toggleMe = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <h1>counter using useState</h1>
      <div>Counter : {count}</div>

      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <br />
      <h1>Toggling using useState</h1>
      <button onClick={toggleMe}>{toggle ? "ON" : "OFF"}</button>
    </>
  );
};

export default useStateEx;
