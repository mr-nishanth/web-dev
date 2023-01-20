import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/Home.page";
import NavBar from "./components/NavBar";
import ParallelQueriesPage from "./components/ParallelQueries.page";
import RQSuperHeroPage from "./components/RQSuperHero.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/super-heroes" element={<SuperHeroesPage />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
          <Route
            path="/rq-super-heroes/:heroId"
            element={<RQSuperHeroPage />}
          />
          <Route path="/rq-parallel" element={<ParallelQueriesPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
