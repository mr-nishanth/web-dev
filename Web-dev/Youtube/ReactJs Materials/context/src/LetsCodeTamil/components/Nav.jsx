import { useContext } from "react";
import { MovieContext } from "./context/MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <nav className="navbar">
      <h2>Nishanth</h2>
      <h2>No of Movie : {movies.length}</h2>
    </nav>
  );
};
export default Nav;
