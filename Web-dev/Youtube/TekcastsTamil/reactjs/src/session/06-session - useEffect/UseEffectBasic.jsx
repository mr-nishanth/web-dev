import { useEffect, useState } from "react";

const UseEffectEx = () => {
  const [count, setCount] = useState(10);
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [todoData, setTodoData] = useState([]);
  const inc = () => {
    setCount((prev) => prev + 1);
  };
  const dec = () => {
    setCount((prev) => prev - 1);
  };
  const toggleMe = () => {
    setToggle((prev) => !prev);
  };

  //^ Its running every time the state was changes or /component render
  // useEffect(() => {
  //   console.log(`Use Effect ${count}`);
  // });

  //^ Its running the first time ( componentDidMount ) [dependencies array]
  // useEffect(() => {
  //   console.log(`Use Effect ${count}`);
  // }, []);

  //^ Its running every time the specified dependencies state was changed
  // useEffect(() => {
  //   console.log(`Use Effect ${count}`);
  // }, [count]);
  useEffect(() => {
    console.log(`Use Effect ${count}`);
  }, [count, toggle]);

  console.log("Rendering...");
  return (
    <div>
      <h1>counter using useState</h1>
      <div>Counter : {count}</div>

      <button onClick={inc}> + </button>
      <button onClick={dec}> - </button>
      <br />
      <h1>Toggling using useState</h1>
      <button onClick={toggleMe}>{toggle ? "ON" : "OFF"}</button>
    </div>
  );
};
export default UseEffectEx;
