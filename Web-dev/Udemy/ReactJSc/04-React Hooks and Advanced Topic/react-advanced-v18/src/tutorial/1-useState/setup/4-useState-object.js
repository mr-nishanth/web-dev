import React, { useState } from "react";

const UseStateObject = () => {
  const data = {
    id: 1,
    name: "Mr Black",
    age: 23,
    message: "random message",
    job: "MERN Stack Dev",
  };
  const [person, setPerson] = useState(data);
  const changeJob = () => {
    setPerson({
      ...person,
      job: "Ethical Hacker",
    });
  };

  return (
    <>
      <h3> Name : {person.name}</h3>
      <h3> Age : {person.age}</h3>
      <h3> Job : {person.job}</h3>
      <button onClick={changeJob} type="button" className="btn">
        change
      </button>
    </>
  );
};

export default UseStateObject;
