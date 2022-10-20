import React from "react";
import ReactDom from "react-dom";
import "./index.css";
/*
    Mini Book Project
*/

const BookList = () => {
  return (
    <section className="BookList">
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
      <JSX />
    </article>
  );
};
const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
    alt="Atomic-Habits"
  />
);

const Title = () => <h1>Atomic Habits: The life-changing million</h1>;
const Author = () => (
  <h4
    style={{
      color: "green",
      fontSize: "1.5rem",
      marginTop: "2rem",
    }}
  >
    James Clear
  </h4>
);

const JSX = () => {
  const name = "Mr Black";
  return <h3>{name}! Welcome</h3>;
};

ReactDom.render(<BookList />, document.getElementById("root"));
