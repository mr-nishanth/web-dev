import WithContext from "./WithContext";
import WithoutContext from "./WithoutContext";

const ContextDemo = () => {
  return (
    <div>
      {/* <WithoutContext /> */}
      <WithContext />
    </div>
  );
};
export default ContextDemo;
