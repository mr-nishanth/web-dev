import React, { useState } from "react";
import { data } from "../../../data";
const UseStateArray = () => {
  const [people, setPeople] = useState(data || []);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <button
              onClick={() => removeItem(id)}
              type="button"
              className="btn"
            >
              remove
            </button>
          </div>
        );
      })}
      <button type="button" onClick={() => setPeople([])} className="btn">
        inline fun
      </button>
    </>
  );
};

export default UseStateArray;
