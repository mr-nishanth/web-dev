import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  // In Movie Provider we set the common properties/state
  const movieLists = [
    {
      name: "Mission Impossible",
      price: "100",
      id: 1,
    },
    {
      name: "Black Panther",
      price: "150",
      id: 2,
    },
    {
      name: "John Wick",
      price: "200",
      id: 3,
    },
    {
      name: "Avatar",
      price: "200",
      id: 4,
    },
  ];
  const [movies, setMovies] = useState(movieLists);

  // ! 1st way
  // return(
  //   <MovieContext.Provider>
  //     <MovieList />
  //     <Nav />
  //   </MovieContext.Provider>
  // );
  // ! 2st way
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
