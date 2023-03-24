import React from "react";
import {BrowserRouter as Router ,Routes , Route} from "react-router-dom"
import {LoginPage} from "./Routes.js"
const App = () => {
  return <div className="">
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        
      </Routes>
    </Router>
  </div>;
};

export default App;
