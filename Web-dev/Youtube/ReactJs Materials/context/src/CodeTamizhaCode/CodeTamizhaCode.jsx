import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import { CounterProvider } from "./Context/CounterContext";
const CodeTamizhaCode = () => {
  return (
    <CounterProvider>
      <div className="center">
        <ComponentA />
        <br /> <hr />
        <ComponentB />
        <br /> <hr />
        <ComponentC />
        <br /> <hr />
      </div>
    </CounterProvider>
  );
};
export default CodeTamizhaCode;
