import { useState } from "react";

const Movie = ({ name, price }) => {
  // const Movie = (props) => {

  return (
    <li>
      {/* <li key={props.key}> */}
      Name : {name} <br /> Price : {price}rs
      {/* Name : {props.name} <br /> Price : {props.price}rs */}
    </li>
  );
};

export default Movie;
