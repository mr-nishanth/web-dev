import { useContext, useReducer } from "react";
import VaccineForm from "./components/VaccineForm";
import VaccineList from "./components/VaccineList";
import VaccineContext from "./context/VaccineContext";
import VaccineReducer from "./reducer/VaccineReducer";
const UseReducerDemo = () => {
  const initialState = useContext(VaccineContext);
  const [state, dispatch] = useReducer(VaccineReducer.reducer, initialState);
  return (
    <VaccineContext.Provider value={{ state, dispatch }}>
      <VaccineForm />
      <VaccineList />
    </VaccineContext.Provider>
  );
};
export default UseReducerDemo;
