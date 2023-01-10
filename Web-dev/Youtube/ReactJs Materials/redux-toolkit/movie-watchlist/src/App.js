import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PageNotFound from "./components/PageNotFound";
import AddMovie from "./features/addMovie";
import WatchedMovies from "./features/watchedMovies";
import WatchListMovies from "./features/watchListMovies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WatchListMovies />} />
        <Route path="/watched" element={<WatchedMovies />} />
        <Route path="/add" element={<AddMovie />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
