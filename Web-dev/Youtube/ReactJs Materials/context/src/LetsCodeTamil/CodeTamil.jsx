import AddMovie from "./components/AddMovie";
import { MovieProvider } from "./components/context/MovieContext";
import MovieList from "./components/MovieList";
import Nav from "./components/Nav";

const CodeTamil = () => {
  return (
    <>
      <MovieProvider>
        <Nav />
        <MovieList />
        <AddMovie />
      </MovieProvider>
    </>
  );
};
export default CodeTamil;
