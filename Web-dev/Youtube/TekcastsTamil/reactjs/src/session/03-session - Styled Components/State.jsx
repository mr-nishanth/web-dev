import { useState } from "react";
import Props from "./Props";
import "./app.css";

const State = () => {
  const [count, setCount] = useState(10);
  const inc = () => {
    setCount((prev) => prev + 1);
  };
  const dec = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <>
      <div className={count <= 25 ? "yellow-card" : "red-card"}>
        <div>Counter : {count}</div>
      </div>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <div className={count > 25 ? "yellow-card" : "red-card"}>
        <div>Counter : {count}</div>
      </div>

      {/* PROPS */}
      <Props counter={count} />
    </>
  );
};

export default State;
