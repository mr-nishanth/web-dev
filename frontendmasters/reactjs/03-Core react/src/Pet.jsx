// import { createElement } from "react";

// const Pet = (props) => {
//   return createElement("div", {}, [
//     createElement("h1", {}, props.name),
//     createElement("h2", {}, props.animal),
//     createElement("h3", {}, props.breed),
//   ]);
// };

const Pet = ({ name, animal, breed }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h3>{breed}</h3>
    </div>
  );
};

export default Pet;
