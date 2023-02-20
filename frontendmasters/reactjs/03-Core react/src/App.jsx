import React from "react";
import { createRoot } from "react-dom";
import Pet from "./Pet";
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(
      Pet,
      {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese",
      },
      null
    ),
    React.createElement(
      Pet,
      {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockatiel",
      },
      null
    ),
    React.createElement(
      Pet,
      { name: "Doink", animal: "Cat", breed: "Mix" },
      null
    ),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
