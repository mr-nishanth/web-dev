import React, { useState } from "react";

const WithReactMemo = () => {
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

      <ReactMemoPocketMoney money={pocketMoney} />
    </div>
  );
};

const PocketMoney = ({ money }) => {
  console.log("Rendering PocketMoney....");
  return (
    <>
      <p>PocketMoney : {money}</p>
    </>
  );
};

const isPropsEqual = (prevProps, nextProps) => {
  //   return prevProps.money === nextProps.money;
  //   return false;
  //   return true;
};

// const ReactMemoPocketMoney = React.memo(PocketMoney);
const ReactMemoPocketMoney = React.memo(PocketMoney, isPropsEqual);

export default WithReactMemo;
