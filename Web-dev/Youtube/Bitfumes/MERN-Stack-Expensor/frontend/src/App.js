import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

// import PageNotFound from "./components/PageNotFound";

import TransactionForm from "./components/TransactionForm";

export default function App() {
  return (
    <div>
      <NavBar />
      <TransactionForm />
      <Router>
        <Routes>
          {/* <Route path="*" exact element={<PageNotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
