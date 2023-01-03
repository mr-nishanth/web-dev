import { useState } from "react";
import Props from "./Props";

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
      <div>Counter : {count}</div>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>

      {/* PROPS */}
      <Props counter={count} />
    </>
  );
};

export default State;
