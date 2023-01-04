// ! Bug , The PocketMoney  component state was not changed but re render

import { useState } from "react";

const WithoutReactMemo = () => {
  const [day, setDay] = useState(1);
  const [pocketMoney, setPocketMoney] = useState(5000);
  const handleIncrement = () => {
    if (day % 5 === 0) {
      setPocketMoney((prev) => prev + 500);
    }
    setDay((prev) => prev + 1);
  };
  console.log("Rendering App....");
  return (
    <div>
      <p>Day : {day} </p>
      <button onClick={handleIncrement}>Increment</button>

      <PocketMoney money={pocketMoney} />
    </div>
  );
};
export default WithoutReactMemo;

const PocketMoney = ({ money }) => {
  console.log("Rendering PocketMoney....");
  return (
    <>
      <p>PocketMoney : {money}</p>
    </>
  );
};
