import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path='sign_up' element={<SignUp />} />
        <Route path='sign_in' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
