import { useState } from "react";

const Movie = ({ name, id, price }) => {
  return (
    <>
      <li key={id}>
        Name : {name} <br /> Price : {price}rs
      </li>
    </>
  );
};
export default Movie;
