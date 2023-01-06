import { useContext, useState } from "react";
import { MovieContext } from "./context/MovieContext";
import Movie from "./Movie";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  console.log(movies);
  return (
    <>
      {movies.map((movie) => (
        <Movie {...movie} key={movie.id} />
        // <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </>
  );
};
export default MovieList;
