import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const handleReset = () => {
    setValue(0);
  };

  {
    /*
    Functional Update form
    in hook functions are sync
     */
  }
  const handleAsyncIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevState) => prevState + 1);
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button
          className="btn"
          type="button"
          onClick={() => setValue(value - 1)}
        >
          decrease
        </button>

        <button className="btn" type="button" onClick={handleReset}>
          reset
        </button>

        <button
          className="btn"
          type="button"
          onClick={() => setValue(value + 1)}
        >
          increase
        </button>
      </section>
      {/*Functional Update form */}
      <section style={{ margin: "4rem 0" }}>
        <h2>More Complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" type="button" onClick={handleAsyncIncrease}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
