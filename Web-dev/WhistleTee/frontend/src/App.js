import Dashboard from "./Components/Dashboard"
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
// import DashboardPage from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddStudent from "./Components/AddStudent"
import UpdateUser from "./Components/UpdateUser"
import Payment from "./Components/Payment"
import "./App.css"
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";


function App() {
  return (
    <>
      <div className="main">
        {/* <NavBar /> */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/create" element={<AddStudent />}></Route>
            <Route path="/update/:id" element={<UpdateUser />}></Route>
            <Route path="/payment/:id" element={<Payment />}></Route>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>

      </div>
    </>

  )
}

export default App