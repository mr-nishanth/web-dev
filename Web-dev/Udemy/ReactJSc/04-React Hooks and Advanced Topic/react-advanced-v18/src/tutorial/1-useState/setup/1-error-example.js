import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    // In this example , we can see[console] the value will be changed , but to not re-rendered,that why we use useState hook
    console.log(title);
    title = "Mr Black";
    console.log(title);
  };
  return (
    <>
      <h2>{title}</h2>
      <button type="button" onClick={handleClick} className="btn">
        random
      </button>
    </>
  );
};

export default ErrorExample;
