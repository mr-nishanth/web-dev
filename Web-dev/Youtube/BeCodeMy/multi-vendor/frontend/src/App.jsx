import React from "react";
import {BrowserRouter as Router ,Routes , Route} from "react-router-dom"
import {LoginPage,SignUpPage} from "./Routes.js"
const App = () => {
  return <div className="">
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>                
        <Route path="/sign-up" element={<SignUpPage/>}/>                
      </Routes>
    </Router>
  </div>;
};

export default App;
