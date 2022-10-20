import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  // toggle error
  const [isError, setIsError] = useState(false);
  return (
    <>
      <h2>short circuit</h2>
      {/* <h2> value 1 : {firstValue}</h2>
      <h2> value 2 : {secondValue}</h2> */}
      {text || (
        <h2>
          default data <code>||</code>
        </h2>
      )}
      {text && (
        <h2>
          default data <code>&&</code>
        </h2>
      )}
      {!text && <h2>Hello World ! </h2>}

      <hr />

      <button onClick={() => setIsError(!isError)} className="btn">
        toggle error
      </button>

      {isError && <h4>Error in short circuit</h4>}
      {isError ? (
        <h4>Error in ternary operator </h4>
      ) : (
        <h4>No Error in ternary operator </h4>
      )}
    </>
  );
};

export default ShortCircuit;
