import CodeTamizhaCode from "./CodeTamizhaCode/CodeTamizhaCode";
import CodeTamil from "./LetsCodeTamil/CodeTamil";
import RoadsideCoder from "./RoadsideCoder/RoadsideCoder";
import Context from "./RoadsideCoder/context/Context";
import "./App.css";
function App() {
  // {/* <CodeTamil /> */}
  //{/* <CodeTamizhaCode /> */}
  return (
    <Context>
      <RoadsideCoder />
    </Context>
  );
}

export default App;
