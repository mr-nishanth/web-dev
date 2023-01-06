import ComponentE from "./ComponentE";
import ComponentF from "./ComponentF";
const ComponentC = () => {
  console.log("Component C");
  return (
    <div>
      ComponentC
      <ComponentE />
      <ComponentF />
    </div>
  );
};
export default ComponentC;
