import React from "react";
import { Provider } from "react-redux";

const WithContext = () => {
  return (
    <div>
      <h1>With context </h1>
      <CompA name="Nishanth" />
    </div>
  );
};
export default WithContext;

// Create a context
// const Context = React.createContext(Provider,Consumer)
const Context = React.createContext();
const ConsumerContext = Context.Consumer;

const UseContextEX = () => {
  const { state } = React.useContext(ConsumerContext);
  return (
    <>
      <p>UseContext : {state.name}</p>
    </>
  );
};

const CompA = () => <CompB></CompB>;
const CompB = () => <CompC></CompC>;
const CompC = () => {
  return (
    <>
      <p>Comp C</p>
      <h1>Name : {name}</h1>
      <UseContextEX />
    </>
  );
};
