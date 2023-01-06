import ComponentD from "./ComponentD";

const ComponentB = () => {
  console.log("Component B");
  return (
    <div>
      ComponentC
      <ComponentD />
    </div>
  );
};
export default ComponentB;
