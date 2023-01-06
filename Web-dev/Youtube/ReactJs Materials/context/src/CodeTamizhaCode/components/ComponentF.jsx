import { useContext } from "react";
import { CounterContext } from "../Context/CounterContext";

const ComponentF = () => {
  const [counter, setCounter] = useContext(CounterContext);
  console.log("Component F");
  return (
    <div>
      ComponentF <h1>Counter : {counter}</h1>
    </div>
  );
};
export default ComponentF;
