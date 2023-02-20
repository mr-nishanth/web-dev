import { createElement } from "react";
import { createRoot } from "react-dom";
import Pet from "./Pet";
const App = () => {
  return createElement("div", {}, [
    createElement("h1", {}, "Adopt Me!"),
    createElement(
      Pet,
      {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese",
      },
      null
    ),
    createElement(
      Pet,
      {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockatiel",
      },
      null
    ),
    createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }, null),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(createElement(App));
