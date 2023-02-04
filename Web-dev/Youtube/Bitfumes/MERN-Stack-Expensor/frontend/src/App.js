import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PageNotFound from "./components/PageNotFound";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="*" exact element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
