import { useState } from "react";
import Movie from "./Movie";

const MovieList = () => {
  const movieLists = [
    {
      name: "Mission Impossible",
      price: "100",
      IdleDeadline: "001",
    },
    {
      name: "Black Panther",
      price: "150",
      IdleDeadline: "002",
    },
    {
      name: "John Wick",
      price: "200",
      IdleDeadline: "003",
    },
    {
      name: "Avatar",
      price: "200",
      IdleDeadline: "004",
    },
  ];

  const [movies, setMovies] = useState(movieLists);
  console.log(movies);
  return (
    <>
      {movies.map((movie) => (
        <Movie {...movie} />
      ))}
    </>
  );
};
export default MovieList;
