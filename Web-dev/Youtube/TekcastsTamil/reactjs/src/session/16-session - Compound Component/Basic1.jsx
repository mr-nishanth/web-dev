// https://reactjs.org/docs/react-api.html

import React, { useEffect, useState } from "react";

import styled from "styled-components";

const RedContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  background-color: red;
  padding: 8px;
  border-radius: 4px;
`;

const useStateEx = () => {
  const [count, setCount] = useState(10);

  const inc = () => {
    setCount((prev) => prev + 1);
  };
  const dec = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <p>Learning....</p>
      <button onClick={inc}>ADD</button>
      <button onClick={dec}>SUB</button>
      <p>Counter {count}</p>
      <ShouldDisplay isDisplay={count > 15}>
        <RedContainer>
          <div>Counter : {count}</div>
        </RedContainer>
      </ShouldDisplay>
    </>
  );
};

const ShouldDisplay = ({ isDisplay = true, children }) =>
  isDisplay ? React.Children.only(children) : null;

export default useStateEx;
